export const langCodes = {
    EN: 'english',
    IT: 'italian'
};

export const trips = {
    'lon-new': {
        id: 1, title: 'Newcastle - London', date: 'today', route: '/trips/lon-new', notifications: 1, additionalInfo: '1 Change (Leeds)',
        announcements: {
            [langCodes.EN]: [
                { text: 'The stop Leeds is cancelled becuause the station is ugly', time: '19:15', location: 'train' },
                { text: 'An elicopter is taking off platform 1', time: '18:30', location: 'station' },
                { text: 'The train is changing platform from 1 to 2', time: '18:00', location: 'station' },
                { text: 'A guy is standing naked on the train track', time: '13:23', location: 'station' },
                { text: 'The train from Newcastle arriving at platform 1, will be delayed', time: '13:22', location: 'station' },
                { text: 'A spaceship is reversing into platform 5', time: '13:21', location: 'station' },
                { text: `This train won't stop in Durham because the train driver ex wife lives there`, time: '13:20', location: 'train' },
                { text: `If you see something that doesn't look right, run for your life`, time: '13:19', location: 'station' },
            ],
            [langCodes.IT]: [
                { text: 'La fermata Leeds è stata cancellata in quanto la stazione è brutta', time: '19:15', location: 'train' },
                { text: 'Un elicottero sta decollando dal ibnario 1', time: '18:30', location: 'station' },
                { text: 'Il treno cambierà binario, da 1 a 2', time: '18:00', location: 'station' },
                { text: `C'è un uomo nudo sui binari`, time: '13:23', location: 'station' },
                { text: 'Il treno in arrivo da Newcastle, sulla piattaforma 1, è in ritardo', time: '13:22', location: 'station' },
                { text: 'Una nave spaziale sta facendo manovre sul binario 5', time: '13:21', location: 'station' },
                { text: `Questo treno non si fermerà a Durham perchè l'ex moglie del conducente live là`, time: '13:20', location: 'train' },
                { text: `Se vedi qualcosa che ti sembra sospetto, scappa`, time: '13:19', location: 'station' },
            ]
        }
    },
    'new-lon': { id: 2, title: 'London - Newcastle', date: 'tomorrow', route: '/trips/new-lon', additionalInfo: '0 Change', },
    'lon-man': { id: 3, title: 'London - Manchester', date: '27/10/2019', route: '/trips/lon-man', additionalInfo: '1 Change (Birmingham New Street)', },
};


export const pastTrips = {
    'lon-new': { id: 4, title: 'Newcastle - London', date: '29/08/2019', additionalInfo: '2 Change (Leeds/Oxford)', },
    'new-lon': { id: 5, title: 'London - Newcastle', date: '20/08/2019', additionalInfo: '0 Change', },
}