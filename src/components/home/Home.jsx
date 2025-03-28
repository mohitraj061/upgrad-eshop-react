//Home page for user after login

import Grid from "@mui/material/Grid";
import useAuthentication from "../../hooks/useAuthentication";
import {useContext} from "react";
import ProductCategory from "../productCategory/ProductCategory";
import Box from "@mui/material/Box";
import ProductSorting from "../productSorting/ProductSorting";
import ProductListing from "../productListing/ProductListing";
import "./home.css";


const Home = () => {
	const {AuthCtx} = useAuthentication();
	const {hasRole} = useContext(AuthCtx);
	let mode = (hasRole(["ADMIN"])) ? "EDIT" : "VIEW";

	return (
		<Box sx={{flexGrow: 1}}>
			<Grid container spacing={1}>
				<Grid container item spacing={3}>
					<Grid item xs={12}>
						<div className="alinecenterwrap">
							<ProductCategory />
						</div>
					</Grid>
					<Grid item xs={12}>
						<div className="productsortwrap">
							<ProductSorting />
						</div>
					</Grid>
					<ProductListing mode={mode}/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;