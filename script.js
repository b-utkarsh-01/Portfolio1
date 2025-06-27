function TimeChnage() {
        var dt = new Date();
        var str = "[ " + (dt.getHours() % 12) + " : " + dt.getMinutes();
        dt.getHours % 12 > 0 ? (str += " : AM ]") : (str += " PM ]");
        document.querySelector(".time").textContent = str;
      }
      function DateAndTimeChnage() {
        var ds = new Date();
        var months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        var str =
          ds.getDate() +
          " " +
          months[ds.getMonth()] +
          "," +
          ds.getFullYear() +
          " [ " +
          (ds.getHours() % 12) +
          " : " +
          ds.getMinutes();
        ds.getHours % 12 > 0 ? (str += " : AM ]") : (str += " : PM ]");
        document.querySelector(".TimeAndDate").textContent = str;
      }
      setInterval(function () {
        TimeChnage();
        DateAndTimeChnage();
      }, 1000);