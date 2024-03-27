/* eslint-disable react/prop-types */

const PageLayout = ({ children }) => {
  return (
    <main className="overflow-hidden relative bg-background pb-10">
      <div className="container mx-auto">{children}</div>
    </main>
  );
};

export default PageLayout;
