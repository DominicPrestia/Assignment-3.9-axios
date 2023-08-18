import React from 'react'

const RecipePopUp = ({ drinks, setRecipePopUp}) => {

    const i = 1;


    //This componenet lists out all the incgredients for each drink individually
    return (
        <>
            <div className='popup'>
                <div onClick={(e) =>  setRecipePopUp(false)}><strong>X</strong></div>
                <div className='ingredients-container'>
                    <div className='mix-container'>
                        <h4>Ingredients:</h4>
                        <ul>
                            {console.log(drinks?.strIngredient1)}
                            {drinks?.strIngredient1 !== null && drinks?.strIngredient1 ? <li>{drinks?.strIngredient1}</li> : null}
                            {drinks?.strIngredient2 !== null && drinks?.strIngredient2 ? <li>{drinks?.strIngredient2}</li> : null}
                            {drinks?.strIngredient3 !== null && drinks?.strIngredient3 ? <li>{drinks?.strIngredient3}</li> : null}
                            {drinks?.strIngredient4 !== null && drinks?.strIngredient4 ? <li>{drinks?.strIngredient4}</li> : null}
                            {drinks?.strIngredient5 !== null && drinks?.strIngredient5 ? <li>{drinks?.strIngredient5}</li> : null}
                            {drinks?.strIngredient6 !== null && drinks?.strIngredient6 ? <li>{drinks?.strIngredient6}</li> : null}
                            {drinks?.strIngredient7 !== null && drinks?.strIngredient7 ? <li>{drinks?.strIngredient7}</li> : null}
                            {drinks?.strIngredient8 !== null && drinks?.strIngredient8 ? <li>{drinks?.strIngredient8}</li> : null}
                            {drinks?.strIngredient9 !== null && drinks?.strIngredient9 ? <li>{drinks?.strIngredient9}</li> : null}
                            {drinks?.strIngredient10 !== null && drinks?.strIngredient10 ? <li>{drinks?.strIngredient10}</li> : null}
                            {drinks?.strIngredient11 !== null && drinks?.strIngredient11 ? <li>{drinks?.strIngredient11}</li> : null}
                            {drinks?.strIngredient12 !== null && drinks?.strIngredient12 ? <li>{drinks?.strIngredient12}</li> : null}
                            {drinks?.strIngredient13 !== null && drinks?.strIngredient13 ? <li>{drinks?.strIngredient13}</li> : null}
                            {drinks?.strIngredient14 !== null && drinks?.strIngredient14 ? <li>{drinks?.strIngredient14}</li> : null}
                            {drinks?.strIngredient15 !== null && drinks?.strIngredient15 ? <li>{drinks?.strIngredient1}</li> : null}
                        </ul>
                    </div>
                    <div className='mix-container'>
                        <h4>Measures:</h4>
                        <ul>
                            {/* //After the && sign the first drinks?.strMeasure1 and drinks?.strMeasure2
                            // the condition is checking for a truthy value
                            // This link explains truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy */}
                            {drinks?.strMeasure1 !== null && drinks?.strMeasure1 ? <li>{drinks?.strMeasure1}</li> : null}
                            {drinks?.strMeasure2 !== null && drinks?.strMeasure2 ? <li>{drinks?.strMeasure2}</li> : null}
                            {drinks?.strMeasure3 !== null && drinks?.strMeasure3  ? <li>{drinks?.strMeasure3}</li> : null}
                            {drinks?.strMeasure4 !== null && drinks?.strMeasure4  ? <li>{drinks?.strMeasure4}</li> : null}
                            {drinks?.strMeasure5 !== null && drinks?.strMeasure5  ? <li>{drinks?.strMeasure}</li> : null}
                            {drinks?.strMeasure6 !== null && drinks?.strMeasure6  ? <li>{drinks?.strMeasure6}</li> : null}
                            {drinks?.strMeasure7 !== null && drinks?.strMeasure7  ? <li>{drinks?.strMeasure7}</li> : null}
                            {drinks?.strMeasure8 !== null && drinks?.strMeasure8  ? <li>{drinks?.strMeasure8}</li> : null}
                            {drinks?.strMeasure9 !== null && drinks?.strMeasure9  ? <li>{drinks?.strMeasure9}</li> : null}
                            {drinks?.strMeasure10 !== null && drinks?.strMeasure10  ? <li>{drinks?.strMeasure10}</li> : null}
                            {drinks?.strMeasure11 !== null && drinks?.strMeasure11  ? <li>{drinks?.strMeasure11}</li> : null}
                            {drinks?.strMeasure12 !== null && drinks?.strMeasure12  ? <li>{drinks?.strMeasure12}</li> : null}
                            {drinks?.strMeasure13 !== null && drinks?.strMeasure13  ? <li>{drinks?.strMeasure13}</li> : null}
                            {drinks?.strMeasure14 !== null && drinks?.strMeasure14  ? <li>{drinks?.strMeasure14}</li> : null}
                            {drinks?.strMeasure15 !== null && drinks?.strMeasure15  ? <li>{drinks?.strMeasure1}</li> : null}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipePopUp