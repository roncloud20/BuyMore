import Card from './Card';

const CardList = ({students}) => {
    if(students === 0) {
        return <h1>Sorry no student to display</h1>
    } else {
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
}

export default CardList;