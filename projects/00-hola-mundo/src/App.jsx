import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'SantiagoSalcedoForero',
        name: 'Santiago Salcedo',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas Duro',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({  userName, name, isFollowing }) => (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                ))
            }
        </section>
    )
}