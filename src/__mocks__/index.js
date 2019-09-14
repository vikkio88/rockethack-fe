export const languages = {
    EN: 'English UK',
    IT: 'Italian',
};

export const langCodes = {
    EN: 'en',
    IT: 'it'
}
export const trips = {
    'lon-new': {
        id: 1, title: 'Newcastle - London', date: 'today', route: '/trips/lon-new', notifications: 1,
        announcements: {
            [langCodes.EN]: [
                { text: 'The stop Leeds is cancelled becuause the station is ugly', time: '19:15', location: 'train' },
                { text: 'An elicopter is taking off platform 1', time: '18:30', location: 'station' },
                { text: 'The train is changing platform from 1 to 2', time: '18:00', location: 'station' },
                { text: 'A guy is standing naked on the train track', time: '13:20', location: 'station' },
            ],
            [langCodes.IT]: [
                { text: 'La fermata LEEDS è stata cancellata perchè la stazione è brutta', time: '19:15', location: 'train' },
                { text: 'Un elicottero sta decollando dalla binario 1', time: '18:30', location: 'station' },
                { text: 'Il treno cambia binario da 1 a 2', time: '18:00', location: 'station' },
                { text: 'Una persona è nuda sui binari', time: '13:20', location: 'station' },
            ]
        }
    },
    'new-lon': { id: 2, title: 'London - Newcastle', date: 'tomorrow', route: '/trips/new-lon' },
};