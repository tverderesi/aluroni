import style from "./Allergenics.module.scss";

const Allergenics = ({ allergenics }: { allergenics: string[] }) => {
  const allergenicIcons = [
    { name: "peanut", label: "Peanut" },
    { name: "tree_nut", label: "Tree Nut" },
    { name: "milk", label: "Milk" },
    { name: "egg", label: "Egg" },
    { name: "wheat", label: "Wheat" },
    { name: "soy", label: "Soy" },
    { name: "fish", label: "Fish" },
    { name: "seafood", label: "Seafood" },
  ];

  return (
    <div className={style.allergenics}>
      <span className="material-symbols-outlined">info</span>
      Allergenics:
      <div className={style.icons}>
        {allergenicIcons.map((allergenic, idx) => {
          if (allergenics.includes(allergenic.name)) {
            return (
              <span key={allergenic.name} title={allergenic.label}>
                {allergenic.name[0].toUpperCase() + allergenic.name.slice(1)}
                {idx < allergenicIcons.length - 1 && allergenics.length > 1
                  ? ","
                  : "."}
              </span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Allergenics;
