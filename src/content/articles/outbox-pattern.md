---
title: "Transactional Outbox Pattern"
description: "The transactional outbox pattern helps ensure atomic execution of independent operations within a single system."
pubDate: "29 September 2025"
keywords: "atomicity transactions transactional-outbox message-broker event-processing data-integrity fault-tolerance at-least-once outbox-pattern"
tags: ["distsys", "system design", "paper"]
draft: false
---
When you transfer money from one account to another, two things happen: one
account is debited and the other is credited. These operation must either
succeed or both fail - anything else leaves the system in an inconsistent state. This is also known as atomicity, a principle where a group of related operations are treated as a single, indivisible unit.<sup><a href="#1">[1]</a></sup>

In systems where both actions occur in the same database, this guarantee is provided by transactions <sup><a href="#2">[2]</a></sup>. But what happens when we need to ensure atomicity between independent operations like sending a notification after a debit occurs on an account?

If you write the record (ie debit entry) to the database and the system crashes
or fails before the notification is sent, the user might never be informed of a
successful transaction. On the other hand, if you  send the notification first
and then fail to persist the debit record due to a database error, you risk
sending a notification for an operation that never occured on the system.

A solution to this is the **Transactional Outbox Pattern**<sup><a href="#3">[3]</a></sup>. This approach
leverages the transaction guarantees of the database by introducing a seperate
table commonly referred to as the `outbox` table. When we perform an operation
in the database (ie debiting an account), we also insert a corresponding event
to the outbox table within the same transaction. By bundling both operations in
a single transaction, we ensure that the event is only recorded if the debit
succeeds.

After we write an event to the outbox table, we can publish it to the message
broker to handle the notifcation, after which we delete the event from the
outbox. If anything happens in between, say the message broker was down due to a
network failure or the notification was sent but the database goes down before the event is deleted, the event remains in the outbox.

A background job routinely scans the outbox table, republishes the events that are left to the message broker and deletes them after a succesful operation.

One of the tradeoffs of this approach is that we risk sending multiple
notifications for the same event (the background job can fail to delete the
event after successfully sending the notification and therefore processes the
event in the next cycle). This is referred to as `at-least-once` delivery.

---
<p>
    <small id="1">
        1. <u><a href="https://en.wikipedia.org/wiki/Atomicity_(database_systems)">Atomicity (database systems)</a></u> <i> <small>Wikipedia</small></i>
    </small>
    </br>
    <small id="2">
        2. <u><a href="https://www.geeksforgeeks.org/dbms/transaction-in-dbms/">Transactions in DBMS</a></u> <i> <small>Geeks for Geeks</small></i>
    </small>
    </br>
    <small id="3">
        3. <u><a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html">Transactional outbox pattern</a></u> <i> <small>Amazon</small></i>
    </small>
</p>
