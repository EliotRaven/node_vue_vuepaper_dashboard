

module.exports = {
    getCards,
    getUsers,
    getEmails,
    getSales,
    index,
}

function index(req, res, next) {
    let statsCards = returnNewstatsCards()
    let emails = returnNewEmails()
    let sales = returnNewSales()
    let users = returnNewUsers()

    res.json({statsCards, users, sales, emails})
}

function getCards(req, res, next) {
    let statsCards = {
        capacity: {
            type: "warning",
            icon: "ti-server",
            title: "Capacity",
            value: _randomInteger(100, 700)+"GB",
            footerText: "Updated now",
            footerIcon: "ti-reload"
        },
        revenue: {
            type: "success",
            icon: "ti-wallet",
            title: "Revenue",
            value: "$"+_randomInteger(1000, 7000),
            footerText: "Last day",
            footerIcon: "ti-calendar"
        },
        errors: {
            type: "danger",
            icon: "ti-pulse",
            title: "Errors",
            value: _randomInteger(10, 30),
            footerText: " In the last hour",
            footerIcon: "ti-timer"
        },
        followers: {
            type: "info",
            icon: "ti-twitter-alt",
            title: "Followers",
            value: '+'+_randomInteger(100, 700),
            footerText: "Updated now",
            footerIcon: "ti-reload"
        }
    }
    res.status(200).json(statsCards)
}

function getUsers (req, res, next) {
    let users = {
        labels: ["9:00AM", "12:00AM", "3:00PM", "6:00PM", "9:00PM", "12:00PM", "3:00AM", "6:00AM"],
        series: [
            _chartRand(100, 900, 9),
            _chartRand(100, 900, 9),
            _chartRand(100, 900, 9)
        ]
    }

    res.json(users)
}

function getEmails (req, res, next) {
    let emailsSeries = _randPieData()
    let emailsLabels = emailsSeries.map(num => {
        return `${num}%`
    })

    let emails = {
        labels: emailsLabels,
        series: emailsSeries
    }

    res.json(emails)
}

function getSales (req, res, next) {
    let sales = {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        series: [
            _chartRand(100, 900, 12),
            _chartRand(100, 900, 12)
        ]
    }
    res.json(sales)
}

function _randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function _chartRand(min, max, count) {
    let series = []
    for(let i = 0; i < count; i++){series.push(_randomInteger(min,max))}
    return series
}

function _randPieData() {
    let data = []
    data.push(_randomInteger(1, 100))

    if (data[0] < 100)
        data.push(_randomInteger(1, (100 - data[0])))

    if ((data[0] + data[1]) < 100)
        data.push(100 - (data[0] + data[1]))

    return data
}

function returnNewstatsCards(){
    return {
        capacity: {
            type: "warning",
            icon: "ti-server",
            title: "Capacity",
            value: _randomInteger(100, 700)+"GB",
            footerText: "Updated now",
            footerIcon: "ti-reload"
        },
        revenue: {
            type: "success",
            icon: "ti-wallet",
            title: "Revenue",
            value: "$"+_randomInteger(1000, 7000),
            footerText: "Last day",
            footerIcon: "ti-calendar"
        },
        errors: {
            type: "danger",
            icon: "ti-pulse",
            title: "Errors",
            value: _randomInteger(10, 30),
            footerText: " In the last hour",
            footerIcon: "ti-timer"
        },
        followers: {
            type: "info",
            icon: "ti-twitter-alt",
            title: "Followers",
            value: '+'+_randomInteger(100, 700),
            footerText: "Updated now",
            footerIcon: "ti-reload"
        }
    }
}

function returnNewUsers() {
    return {
        labels: ["9:00AM", "12:00AM", "3:00PM", "6:00PM", "9:00PM", "12:00PM", "3:00AM", "6:00AM"],
        series: [
            _chartRand(100, 900, 9),
            _chartRand(100, 900, 9),
            _chartRand(100, 900, 9)
        ]
    }
}
function returnNewSales() {
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        series: [
            _chartRand(100, 900, 12),
            _chartRand(100, 900, 12)
        ]
    }
}
function returnNewEmails() {
    let emailsSeries = _randPieData()
    let emailsLabels = emailsSeries.map(num => {
        return `${num}%`
    })

    return {
        labels: emailsLabels,
        series: emailsSeries
    }

}
