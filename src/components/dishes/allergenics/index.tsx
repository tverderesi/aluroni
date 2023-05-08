import style from "./Allergenics.module.scss";

const Allergenics = ({ allergenics }: { allergenics: string[] }) => {
  const allergenicLib = [
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
        {allergenics.length > 0 ? (
          allergenics.map((allergenic, idx) => {
            return (
              <span>
                {allergenic}
                {idx < allergenics.length - 1 && allergenics.length > 1
                  ? ","
                  : "."}
              </span>
            );
          })
        ) : (
          <span>none.</span>
        )}
      </div>
    </div>
  );
};

export default Allergenics;
