import { useSelector } from "react-redux";
import { CustomModel } from "./CustomeModel";
import { UpdatePowerState } from "../updatePowerState/UpdatePowerState";

export const CharacterFeatures = ({ isEditable }) => {
  const { knowTheClick, oneSuperHero } = useSelector(
    (state) => state.superHero
  );
  const powerstats = oneSuperHero.powerstats || {};

  const appearance = oneSuperHero.appearance || {};

  const biography = oneSuperHero.biography || {};

  const work = oneSuperHero.work || {};

  return (
    <CustomModel>
      <h4>{knowTheClick}</h4>

      {knowTheClick === "powerstats" &&
        (isEditable ? (
          <UpdatePowerState powerstats={powerstats} />
        ) : (
          Object.keys(powerstats).length &&
          Object.keys(powerstats).map((key, index) => (
            <li key={index}>
              <span className="fw-bold">{key}: </span>
              {powerstats[key]}
            </li>
          ))
        ))}

      {knowTheClick === "appearance" &&
        Object.keys(appearance).length &&
        Object.keys(appearance).map((key, index) => (
          <li key={index}>
            <span className="fw-bold">{key}: </span>
            {appearance[key]}
          </li>
        ))}
      {knowTheClick === "biography" &&
        Object.keys(biography).length &&
        Object.keys(biography).map((key, index) => (
          <li key={index}>
            <span className="fw-bold">{key}: </span>
            {biography[key]}
          </li>
        ))}
      {knowTheClick === "work" &&
        Object.keys(work).length &&
        Object.keys(work).map((key, index) => (
          <li key={index}>
            <span className="fw-bold">{key}: </span>
            {work[key]}
          </li>
        ))}
    </CustomModel>
  );
};
