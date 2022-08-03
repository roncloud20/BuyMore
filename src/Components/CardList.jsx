import Card from './Card';

const CardList = ({students}) => {
    return (
        <div className="cardList">
            {
                students.map((v,i) => {
                    return (
                        <Card 
                            key={students[i].id}
                            name={students[i].name} 
                            email={students[i].email} 
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;