function Content(props) {
  return (
    <div className="content">
      <div className="page-cover-wrapper">
        <img
          alt="Mang Wu Blog"
          srcset="./images/page-cover.avif"
          src="./images/page-cover.avif"
          decoding="async"
          data-nimg="intrinsic"
          className="page-cover"
        />
      </div>
      <div className="wrapper">{props.children}</div>
    </div>
  );
}
