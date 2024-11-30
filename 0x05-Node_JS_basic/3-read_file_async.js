const fs = require('fs').promises;

async function countStudent(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // const headers = lines[0].split(',');
    const students = lines.slice(1);
    const fields = {};
    for (const student of students) {
      const field = student.split(',')[3];
      const firstName = student.split(',')[0];
      if (!(field in fields)) {
        fields[field] = {
          num: 1,
          firstNames: [firstName],
        };
      } else {
        fields[field].num += 1;
        fields[field].firstNames.push(firstName);
      }
    }
    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].num}. List: ${fields[field].firstNames.join(', ')}`);
      }
    }
  } catch (_) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudent;
