import React from 'react';

const PlanetRandomView = ({planet}) =>{
    const{ id, name, population, rotationPeriod, diameter } = planet;


    return(
        <React.Fragment>
            <div className="planet-random__visual">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="planet-random__img"/>
            </div>
            <div className="planet-random__info-block">
                <h1 className="title planet-random__title">
                    {name}
                </h1>
                <div className="planet-random__description">
                    <table className="table">
                        <tbody>
                        <tr className="table__row">
                            <td className="table__cell">Население</td>
                            <td className="table__cell">{population}</td>
                        </tr>
                        <tr className="table__row">
                            <td className="table__cell">Период вращения</td>
                            <td className="table__cell">{rotationPeriod}</td>
                        </tr>
                        <tr className="table__row">
                            <td className="table__cell">Диаметр</td>
                            <td className="table__cell">{diameter}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
};

export default PlanetRandomView;