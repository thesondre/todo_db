```bash
  create database todo_db;
```


```bash
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    done BOOLEAN DEFAULT FALSE
);
```


```
db.query('INSERT INTO todos (text) VALUES (?)', [text], (err) => {
    if (err) return res.status(500).send(err.message);
    res.redirect('/');
});
```


```
db.query('UPDATE todos SET done = TRUE WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err.message);
    res.redirect('/');
});
```



