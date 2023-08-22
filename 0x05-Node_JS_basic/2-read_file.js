const fs = require('fs');

const countStudents = (path) => {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const fields = {};
      let count = 0;
      let message = '';
      data.toString().split('\n').forEach((line) => {
        count += 1;
        if (line !== '') {
          const student = line.split(',');
          if (!fields[student[3]]) fields[student[3]] = [];
          fields[student[3]].push(student[0]);
        }
      });
      message += `Number of students: ${count - 1}\n`;
      for (const field in fields) {
        if (field) {
          const list = fields[field];
          message += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }
      }
      console.log(message.slice(0, -1));
      resolve();
    });
  };
  return new Promise(promise);
};

module.exports = countStudents;
