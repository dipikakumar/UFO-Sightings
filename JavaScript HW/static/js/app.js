// from data.js
var tableData = data;

//Select table body
// var table = d3.select("tbody")

for (i = 0; i < tableData.length; i ++){
    var tbody = d3.select("tbody")
    var row = tbody.append("tr")
    if('datetime' in data[i]){
        row.append('td').text(data[i].datetime)
    }
    if('city' in data[i]){
        row.append('td').text(data[i].city)
    }
    if('state' in data[i]){
        row.append('td').text(data[i].state)
    }
    if('country' in data[i]){
        row.append('td').text(data[i].country)
    }
    if('shape' in data[i]){
        row.append('td').text(data[i].shape)
    }
    if('durationMinutes' in data[i]){
        row.append('td').text(data[i].durationMinutes)
    }
    if('comments' in data[i]){
        row.append('td').text(data[i].comments)
    }
}
