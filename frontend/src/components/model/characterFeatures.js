import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../pages/superHeroRedux/Slice";
import { UpdatePowerState } from "../updatePowerState/UpdatePowerState";
import { CustomModel } from "./CustomeModel";

export const CharacterFeatures = ({ modelData, ...rest }) => {
  const dispatch = useDispatch();
  const { oneSuperHero } = useSelector((state) => state.superHero);

  const Powerstatus = [
    {
      Intelligence: oneSuperHero.powerstats?.intelligence,
    },
    {
      Strength: oneSuperHero.powerstats?.strength,
    },
    {
      Speed: oneSuperHero.powerstats?.speed,
    },
    {
      Durability: oneSuperHero.powerstats?.durability,
    },
    {
      Power: oneSuperHero.powerstats?.power,
    },
    {
      Combat: oneSuperHero.powerstats?.combat,
    },
  ];

  const Appearance = [
    { Gender: oneSuperHero.appearance?.gender },
    { Race: oneSuperHero.appearance?.race },
    { Height: oneSuperHero.appearance?.height[0] },
    { Weight: oneSuperHero.appearance?.weight[0] },
    { EyeColor: oneSuperHero.appearance?.eyeColor },
    { HairColor: oneSuperHero.appearance?.hairColor },
  ];

  const biography = [
    {
      FullName: oneSuperHero.biography?.fullName,
    },
    {
      BirthPlace: oneSuperHero.biography?.placeOfBirth,
    },
    {
      FirstAppearance: oneSuperHero.biography?.firstAppearance,
    },
    {
      Publisher: oneSuperHero.biography?.publisher,
    },
    {
      Alignment: oneSuperHero.biography?.alignment,
    },
  ];

  const work = [
    {
      Occupation: oneSuperHero.work?.occupation,
    },
    {
      Base: oneSuperHero.work?.base,
    },
  ];

  return (
    <CustomModel>
      <h4>{modelData}</h4>
      {modelData === "powerstats" && (
        <UpdatePowerState Powerstatus={Powerstatus} />
      )}
      {modelData === "appearance" &&
        Appearance.map((item, index) => (
          <li key={index}>
            <span className="fw-bold">{Object.keys(item)}: </span>
            {Object.values(item).toString()}
          </li>
        ))}

      {modelData === "biography" &&
        biography.map((item, index) => (
          <li key={index}>
            <span className="fw-bold">{Object.keys(item)}: </span>
            {Object.values(item).toString()}
          </li>
        ))}

      {modelData === "work" &&
        work.map((item, index) => (
          <li key={index}>
            <span className="fw-bold">{Object.keys(item)}: </span>
            {Object.values(item).toString()}
          </li>
        ))}
    </CustomModel>
  );
};
