/* eslint-disable react/prop-types */
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Checkbox, Label } from "flowbite-react";

const FilterSidebar = ({ data, states }) => {
  const {
    checkedBrands,
    setCheckedBrands,
    checkedCategories,
    setCheckedCategories,
  } = states;

  const handleBrandChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setCheckedBrands([...checkedBrands, id]);
    } else {
      setCheckedBrands(checkedBrands.filter((item) => item !== id));
    }
  };
  const handleCategoryChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setCheckedCategories([...checkedCategories, id]);
    } else {
      setCheckedCategories(checkedCategories.filter((item) => item !== id));
    }
  };

  return (
    <div className="border border-gray-500 rounded-lg p-4 col-span-12 md:col-span-3">
      <div className="flex justify-between">
        <span className="font-bold">Filter</span>
        <FontAwesomeIcon icon={faSliders} />
      </div>
      <hr className="my-5 border-gray-100" />

      {data && (
        <Accordion className="border-gray-100 my-2">
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">
              Categories
            </Accordion.Title>
            <Accordion.Content className="border-gray-100 h-80 overflow-y-scroll">
              {data?.categories?.map((category) => {
                return (
                  <div key={category._id} className="flex items-center gap-2">
                    <Checkbox
                      id={category._id}
                      onChange={handleCategoryChange}
                      checked={checkedCategories[category._id]}
                    />
                    <Label htmlFor={category._id} className="flex">
                      {category?.name}
                    </Label>
                  </div>
                );
              })}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      )}

      <Accordion className="border-gray-100 my-2">
        <Accordion.Panel className="border-gray-100">
          <Accordion.Title className="focus:ring-0">Brands</Accordion.Title>
          <Accordion.Content className="border-gray-100 border-y-0 h-80 overflow-y-scroll">
            {data?.brands?.map((brand) => {
              return (
                <div key={brand._id} className="flex items-center gap-2">
                  <Checkbox
                    id={brand._id}
                    onChange={handleBrandChange} // Pass the function to onChange
                    checked={checkedBrands[brand._id]}
                  />
                  <Label htmlFor={brand._id} className="flex">
                    {brand?.name}
                  </Label>
                </div>
              );
            })}
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
