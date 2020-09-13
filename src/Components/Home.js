import React, { useState } from "react";
import { Nav, Navbar, Button, Container, Row, Card } from "react-bootstrap";
import FeaturedList from "./FeaturedList";
import SectionBar from "./SectionBar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/App.css";
import SectionList from "./SectionList";
import Upsell from "./Upsell";


export const MenuContext = React.createContext();

export default function Home() {
  //TODO: add details property in every
  const sectionMenu = [
    {
      id: 1,
      Name: "Banana Yogurt",
      Description: "Basically Banana with yogurt duhhhh. ",
      Price: 13,
      Picture: "/pictures/banana_yogurt.jpg",
      SectionID: "Fruit Yogurt",
      Quantity: 1,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },

    {
      id: 2,
      Name: "Strawberry Yogurt",
      Description: "Basically strawberry with yogurt duhhhh. ",
      Price: 14,
      Picture: "/pictures/strawberry_yogurt.jpg",
      SectionID: "Fruit Yogurt",
      Quantity: 0,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },
    {
      id: 3,
      Name: "Guava Yogurt",
      Description: "Basically guava with yogurt duhhhh. ",
      Price: 15,
      Picture: "/pictures/guava_yogurt.png",
      SectionID: "Fruit Yogurt",
      Quantity: 0,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },
    {
      id: 4,
      Name: "Durian Yogurt",
      Description: "Basically durian with yogurt duhhhh. ",
      Price: 17,
      Picture: "/pictures/durian_yogurt.jpg",
      SectionID: "Fruit Yogurt",
      Quantity: 0,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },
    {
      id: 5,
      Name: "Mango Yogurt",
      Description: "Basically mango with yogurt duhhhh. ",
      Price: 17,
      Picture: "/pictures/mango_yogurt.jpg",
      SectionID: "Fruit Yogurt",
      Quantity: 0,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },
    {
      id: 6,
      Name: "Purple Rice Yogurt",
      Description: "Basically purple rice with yogurt duhhhh. ",
      Price: 18,
      Picture: "/pictures/strawberry_yogurt.jpg", //this image needs to be changed.
      SectionID: "Rice Yogurt",
      Quantity: 0,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },
    {
      id: 7,
      Name: "Grape Green Tea",
      Description: "Basically grape with tea duhhhh. ",
      Price: 19,
      Picture: "/nothing", //this image needs to be changed.
      SectionID: "Fruit Tea",
      Quantity: 0,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },
    {
      id: 8,
      Name: "Guava Green Tea",
      Description: "Basically purple rice with yogurt duhhhh. ",
      Price: 20,
      Picture: "/nothing", //this image needs to changed.
      SectionID: "Fruit Tea",
      Quantity: 0,
      UpsellDetails: [
        {
          id: 1,
          Name: "Modifications",
          Details: [
            //upsell comes with price changes as well.
            { id: 1, name: "25% Ice", isChecked: {} },
            { id: 2, name: "50% Ice", isChecked: {} },
            { id: 3, name: "75% Ice", isChecked: {} },
            { id: 4, name: "100% Ice", isChecked: {} },
            { id: 5, name: "25% Sugar", isChecked: {} },
            { id: 6, name: "50% Sugar", isChecked: {} },
            { id: 7, name: "75% Sugar", isChecked: {} },
            { id: 8, name: "100% Sugar", isChecked: {} },
          ],
        },
        {
          id: 2,
          Name: "Addition",
          Details: [
            { id: 1, name: "Small Cup", isChecked: {} },
            { id: 2, name: "Medium Cup", isChecked: {} },
            { id: 3, name: "Large Cup", isChecked: {} },
            { id: 4, name: "Extra Fruit", isChecked: {} },
          ],
        },
      ],
    },
  ];

  const [Menu, setMenu] = useState(sectionMenu);
  const MenuContextValue = {
    handleSectionSelect: handleSectionSelect,
    handleClose: handleClose,
    handleShow: handleShow,
    handleMenuChange: handleMenuChange,
  };

  const [selectedSectionItems, setSelectedSectionItems] = useState();
  function handleSectionSelect(selectedSectionID) {
    const selectedItems = Menu.filter(
      (item) => item.SectionID === selectedSectionID
    );
    setSelectedSectionItems(selectedItems);
  }

  const [showsUpsell, setShowUpsell] = useState(false);

  //state for the details
  const [foundDetails, setFoundDetails] = useState();
  function handleClose(id) {
    const index = Menu.findIndex((i) => i.id === id);
    const foundDetails = Menu[index].UpsellDetails.map((item) =>
      item.Details.filter((i) => i.isChecked === true)
    );
    setFoundDetails(foundDetails);
    setShowUpsell(false);
  }

  function handleShow(id) {
    const selected = Menu.find((item) => item.id === id);
    setMenuId(selected.id);
    setUpsellList(selected.UpsellDetails);
    setShowUpsell(true);
  }

  //this is just used for initiation.
  const upsellList = [
    {
      id: 1,
      Name: "Modifications",
      Details: [
        //upsell comes with price changes as well.
        { id: 1, name: "25% Ice" },
        { id: 2, name: "50% Ice" },
        { id: 3, name: "75% Ice" },
        { id: 4, name: "100% Ice" },
        { id: 5, name: "25% Sugar" },
        { id: 6, name: "50% Sugar" },
        { id: 7, name: "75% Sugar" },
        { id: 8, name: "100% Sugar" },
      ],
    },
    {
      id: 2,
      Name: "Addition",
      Details: [
        { id: 1, name: "Small Cup" },
        { id: 2, name: "Medium Cup" },
        { id: 3, name: "Large Cup" },
        { id: 4, name: "Extra Fruit" },
      ],
    },
  ];

  //this upsellList should be provided by the restaurant just like the menu.
  const [UpsellList, setUpsellList] = useState(upsellList);
  const [MenuId, setMenuId] = useState();

  // const cartItemTemplate = [
  //   {
  //     id: 1,
  //     Name: "",
  //     Quantity: 0,
  //     Details: [
  //       { id: 1, Name: "" },
  //       { id: 1, Name: "" },
  //     ],
  //   },
  // ];

  // const [cartItem, setCartItem] = useState();

  function handleMenuChange(id, newUpsellDetails) {
    const newMenu = [...Menu];
    const index = newMenu.findIndex((item) => item.id === id);
    // const newMenuItem = newMenu.find((item) => item.id === id);
    newMenu[index].UpsellDetails = newUpsellDetails;
    console.log(newMenu);
    setMenu(newMenu);
  }

  return (
    <MenuContext.Provider value={MenuContextValue}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="/logo.png"
            width="60"
            height="60'
            "
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Button href="/cart">
          <img
            src="/shopping-cart.png"
            width="20"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Button>
      </Navbar>
      <FeaturedList Menu={Menu} />
      <SectionBar />
      {selectedSectionItems && <SectionList Menu={selectedSectionItems} />}
      <Upsell show={showsUpsell} UpsellList={UpsellList} MenuId={MenuId} />
    </MenuContext.Provider>
  );
}
