






import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { restaurentdata } from "../mock/data";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurentdata);
    },
  });
});
test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(10);

  console.log(shimmer);
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
  //console.log(shimmer);
});

test("Search for string(King) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByPlaceholderText("Select Restaurant");

  fireEvent.change(input, {
    target: {
      value: "kutchi king",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});


