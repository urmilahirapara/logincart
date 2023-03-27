import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import  Header  from "../Header";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header",
()=>{
    const header = render(
    <StaticRouter>
    <Provider store={store}>
    <Header />
    </Provider>
    </StaticRouter>
    );
 const logo=header.getAllByTestId("logo");
//  console.log(logo);
 expect(logo[0].src).toBe("http://localhost/Logo");
// console.log(header);
});


test("onlinestatus should green",
()=>{
    const header = render(
    <StaticRouter>
    <Provider store={store}>
    <Header />
    </Provider>
    </StaticRouter>
    );
 const onlinestatus1=header.getByTestId("onlinestatus");
 expect(onlinestatus1.innerHTML).toBe("💹");

});

test("cart should 0 item",
()=>{
    const header = render(
    <StaticRouter>
    <Provider store={store}>
    <Header />
    </Provider>
    </StaticRouter>
    );
 const cart=header.getByTestId("cart");
 expect(cart.innerHTML).toBe("<b>Cart 0</b>");

}); 