export const dataQuestions = [
    {
        question: 'Как переводится "Календарь"?',
        type: 'correlation',
        options: [
            {
                id: '1',
                image: require('../assets/words/city.png'),
                text: 'City'
            },
            {
                id: '2',
                image: require('../assets/words/nine.png'),
                text: 'Nine'
            },
            {
                id: '3',
                image: require('../assets/words/tea.png'),
                text: 'Tea'
            },
            {
                id: '4',
                image: require('../assets/words/calendar.png'),
                text: 'Calendar',
                correct: true,
            }
        ]
    },
    {
        question: 'Как переводится "Город"?',
        type: 'correlation',
        options: [
            {
                id: '1',
                image: require('../assets/words/city.png'),
                text: 'City',
                correct: true,
            },
            {
                id: '2',
                image: require('../assets/words/nine.png'),
                text: 'Nine'
            },
            {
                id: '3',
                image: require('../assets/words/television.png'),
                text: 'Television'
            },
            {
                id: '4',
                image: require('../assets/words/coffee.png'),
                text: 'Coffee'
            }
        ]
    },
    {
        question: 'Как переводится "Tea"?',
        type: 'correlation',
        options: [
            {
                id: '1',
                image: require('../assets/words/city.png'),
                text: 'City'
            },
            {
                id: '2',
                image: require('../assets/words/america.png'),
                text: 'America'
            },
            {
                id: '3',
                image: require('../assets/words/tea.png'),
                text: 'Tea',
                correct: true,
            },
            {
                id: '4',
                image: require('../assets/words/television.png'),
                text: 'Television'
            }
        ]
    },
    {
        question: 'Нажмите на пары слов',
        type: 'match',
        options: {
            currentLanguage: [
                {
                    id: '1',
                    text: 'City'
                },
                {
                    id: '2',
                    text: 'America'
                },
                {
                    id: '3',
                    text: 'Tea',
                },
                {
                    id: '4',
                    text: 'Television'
                },
                {
                    id: '5',
                    text: 'Сat'
                }
            ],
            anotherLanguage: [
                {
                    id: '2',
                    text: 'Америка'
                },
                {
                    id: '4',
                    text: 'Телевизор'
                },
                {
                    id: '5',
                    text: 'Кошка'
                },
                {
                    id: '3',
                    text: 'Чай',
                },
                {
                    id: '1',
                    text: 'Улица'
                },
            ]
    }
    },
    {
        question: 'Как переводится "Tea"?',
        type: 'sentence',
        options: [
            {
                id: '1',
                image: require('../assets/words/city.png'),
                text: 'City'
            },
            {
                id: '2',
                image: require('../assets/words/america.png'),
                text: 'America'
            },
            {
                id: '3',
                image: require('../assets/words/tea.png'),
                text: 'Tea',
                correct: true,
            },
            {
                id: '4',
                image: require('../assets/words/television.png'),
                text: 'Television'
            }
        ]
    },
]