import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- css Styles-</p>
      <button className={classes.button}>fight</button>
    </div>
  );
};
