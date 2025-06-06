/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MenuTable from "../components/MenuTable";

import getListTraditionalMenu from '../services/getListTraditionalMenu'
const TableTraditionalMenuPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableMenu: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listTraditionalMenu, setListTraditionalMenu] = useState()
	
	
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMenu: true}))
				const { data: listTraditionalMenu } = await getListTraditionalMenu()
				setListTraditionalMenu(listTraditionalMenu.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMenu: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Table Traditional Menu Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Menu"}
	singularName={"Menu"}
	items={[listTraditionalMenu]}
	isLoading={isLoading.tableMenu}
>
	<MenuTable
		listTraditionalMenu={listTraditionalMenu}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableTraditionalMenuPage

