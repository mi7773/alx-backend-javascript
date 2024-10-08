export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },

    getNumberOfDepartments(reportAllEmployees) {
      let num = 0;
      for (const key in reportAllEmployees) {
        if (Object.prototype.hasOwnProperty.call(reportAllEmployees, key)) {
          num += 1;
        }
      }

      return num;
    },
  };

  return report;
}
