var stockData = [  
    {
        Time: ["0800"],
        Task: window.localStorage.getItem('0800'),
        
    },
    {
        Time: ["0900"],
        Task: window.localStorage.getItem('0900'),
        
    },
    {
        Time: ["1000"],
        Task: window.localStorage.getItem('1000'),
        
    },
    {
        Time: ["1100"],
        Task: window.localStorage.getItem('1100'),
        
    },
    {
        Time: ["1200"],
        Task: window.localStorage.getItem('1200'),
        
    },
    {
        Time: ["1300"],
        Task: window.localStorage.getItem('1300'),
        
    },
    {
        Time: ["1400"],
        Task: window.localStorage.getItem('1400'),
        
    },
    {
        Time: ["1500"],
        Task: window.localStorage.getItem('1500'),
        
    },
    {
        Time: ["1600"],
        Task: window.localStorage.getItem('1600'),
        
    },
    {
        Time: ["1700"],
        Task: window.localStorage.getItem('1700'),
        
    },
  
];


function convertArrayOfObjectsToCSV(args) {  
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(args) {  
    var data, filename, link;
    var csv = convertArrayOfObjectsToCSV({
        data: stockData
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}