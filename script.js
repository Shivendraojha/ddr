document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit-btn');
    var outputDiv = document.getElementById('output');

    submitButton.addEventListener('click', function () {
        var columnData = getColumnData();
        var table = createTable(columnData);
        outputDiv.appendChild(table);
        //rough

    });

    function getColumnData() {
        var inputColumn1 = document.getElementById('input-column-1').value;
        var inputColumn2 = document.getElementById('input-column-2').value;
        var inputColumn3 = document.getElementById('input-column-3').value;
        var inputColumn5 = document.getElementById('input-column-5').value;
        var inputColumn7 = document.getElementById('input-column-7').value;


        // getting the month of start date
        var inputDate = document.getElementById("input-column-2").value;
        var dateObject = new Date(inputDate);
        var month = dateObject.getMonth();

        // counting total no of days

        var startDate = new Date(document.getElementById("input-column-2").value);
        var endDate = new Date(document.getElementById("input-column-3").value);

        var timeDifference = endDate - startDate;
        if (timeDifference <= 0) {
            alert("Please ensure that end date isn't preceding the start date.")
        }
        var totalDayss = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        //Subtracting excluded dates
        var inputDates = document.getElementById("input-column-5").value;


        var datesArray = inputDates.split(',');


        datesArray = datesArray.map(date => date.trim());


        datesArray = datesArray.filter(date => date !== '' && !isNaN(new Date(date).getTime()));


        var numberOfDates = datesArray.length;
        var totalDays = totalDayss - numberOfDates


        var lead = document.getElementById("input-column-7").value
        var DDR = lead / totalDays
        // appending data
        var columnData = [];
        columnData.push(inputColumn1, inputColumn2, inputColumn3, month + 1, inputColumn5, totalDays, inputColumn7, DDR);
        return columnData;
    }

    function createTable(data) {
        var table = document.createElement('table');
        var row = document.createElement('tr');
        for (var i = 0; i < data.length; i++) {
            var cell = document.createElement('td');
            cell.textContent = data[i];
            row.appendChild(cell);
        }
        table.appendChild(row);
        return table;
    }
});
