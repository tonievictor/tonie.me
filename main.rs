
        match self.keydir.get(&key).cloned() {
            Some(v) => {
                let mut buf = vec![0u8; v.value_size];
                self.file.seek(SeekFrom::Start(v.value_pos))?;
                self.file.read_exact(&mut buf)?;
                let jstr = String::from_utf8(buf)?;
                let pair: Pair = serde_json::from_str(jstr.as_str())?;
                Ok(Some(pair.value))
            }
            None => Ok(None),
        }
