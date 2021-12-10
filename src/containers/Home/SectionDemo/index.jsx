import Demo from "./Demo";

const SectionDemo = ({dataUp , dataDown}) => {

  return (
    <div className="row">
      {dataUp && dataUp.map((item , key) => (
          <Demo
            key={key}
            path={item.path}
            img={item.imgDemo}
          />
        ))}

      {dataDown && dataDown.map((item , key) => (
          <Demo
            key={key}
            path={item.path}
            img={item.imgDemo}
            version={item.version}
          />
        ))}
    </div>
  );
}

export default SectionDemo;
