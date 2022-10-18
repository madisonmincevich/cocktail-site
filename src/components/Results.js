import React from "react";
import "../styling/Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="randomResults">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="cocktailName">{props.results.drinks[0].strDrink}</h2>
            <div className="drinkType">
              Type: {props.results.drinks[0].strAlcoholic}
            </div>
          </div>
          <div className="col-sm-3">
            <img
              src={props.results.drinks[0].strDrinkThumb}
              className="cocktailImg rounded img-fluid"
              alt="Cocktail Image"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <h3 className="text-start">Ingredients:</h3>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure1}{" "}
              {props.results.drinks[0].strIngredient1}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure2}{" "}
              {props.results.drinks[0].strIngredient2}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure3}{" "}
              {props.results.drinks[0].strIngredient3}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure4}{" "}
              {props.results.drinks[0].strIngredient4}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure5}{" "}
              {props.results.drinks[0].strIngredient5}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure6}{" "}
              {props.results.drinks[0].strIngredient6}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure7}{" "}
              {props.results.drinks[0].strIngredient7}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure8}{" "}
              {props.results.drinks[0].strIngredient8}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure9}{" "}
              {props.results.drinks[0].strIngredient9}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure10}{" "}
              {props.results.drinks[0].strIngredient10}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure11}{" "}
              {props.results.drinks[0].strIngredient11}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure12}{" "}
              {props.results.drinks[0].strIngredient12}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure13}{" "}
              {props.results.drinks[0].strIngredient13}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure14}{" "}
              {props.results.drinks[0].strIngredient14}
            </p>
            <p className="ingredient">
              {props.results.drinks[0].strMeasure15}{" "}
              {props.results.drinks[0].strIngredient15}
            </p>
          </div>
          <div className="col-sm-7">
            <h3 className="text-start">Recipe:</h3>
            <p className="instructions">
              {props.results.drinks[0].strInstructions}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
