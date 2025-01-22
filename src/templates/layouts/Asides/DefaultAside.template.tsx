import React from 'react';
import { useNavigate } from 'react-router-dom';
import Aside, { AsideBody } from '../../../components/layouts/Aside/Aside';
import { appPages } from '../../../config/pages.config';
import Nav, {
	NavButton,
	NavCollapse,
	NavItem,
	NavTitle,
} from '../../../components/layouts/Navigation/Nav';
import Badge from '../../../components/ui/Badge';
import AsideHeadPart from './_parts/AsideHead.part';
import AsideFooterPart from './_parts/AsideFooter.part';

const DefaultAsideTemplate = () => {
	const navigate = useNavigate();

	return (
		<Aside>
			<AsideHeadPart />
			<AsideBody>
				<Nav>
					<NavItem {...appPages.main} />
					<NavItem {...appPages.sales} />
					<NavItem {...appPages.forecast} />

					<NavItem {...appPages.salesAppPages.subPages.salesDashboardPage} />

					<NavItem {...appPages.projectAppPages.subPages.projectDashboardPage}>
						<Badge
							variant='outline'
							color='emerald'
							className='border-transparent leading-none'>
							6
						</Badge>
					</NavItem>

					<NavTitle>Apps</NavTitle>
					<NavCollapse
						text={appPages.salesAppPages.text}
						to={appPages.salesAppPages.to}
						icon={appPages.salesAppPages.icon}>
						<NavItem {...appPages.salesAppPages.subPages.salesDashboardPage} />
						<NavCollapse
							text={appPages.salesAppPages.subPages.productPage.text}
							to={appPages.salesAppPages.subPages.productPage.to}
							icon={appPages.salesAppPages.subPages.productPage.icon}>
							<NavItem
								{...appPages.salesAppPages.subPages.productPage.subPages.listPage}
							/>
							<NavItem
								{...appPages.salesAppPages.subPages.productPage.subPages.editPage}
							/>
						</NavCollapse>
						<NavCollapse
							text={appPages.salesAppPages.subPages.categoryPage.text}
							to={appPages.salesAppPages.subPages.categoryPage.to}
							icon={appPages.salesAppPages.subPages.categoryPage.icon}>
							<NavItem
								{...appPages.salesAppPages.subPages.categoryPage.subPages.listPage}
							/>
							<NavItem
								{...appPages.salesAppPages.subPages.categoryPage.subPages.editPage}
							/>
						</NavCollapse>
					</NavCollapse>

					<NavCollapse
						text={appPages.crmAppPages.text}
						to={appPages.crmAppPages.to}
						icon={appPages.crmAppPages.icon}>
						<NavItem {...appPages.crmAppPages.subPages.crmDashboardPage} />
						<NavCollapse
							text={appPages.crmAppPages.subPages.customerPage.text}
							to={appPages.crmAppPages.subPages.customerPage.to}
							icon={appPages.crmAppPages.subPages.customerPage.icon}>
							<NavItem
								{...appPages.crmAppPages.subPages.customerPage.subPages.listPage}
							/>
							<NavItem
								{...appPages.crmAppPages.subPages.customerPage.subPages.editPage}
							/>
						</NavCollapse>
						<NavCollapse
							text={appPages.crmAppPages.subPages.rolePage.text}
							to={appPages.crmAppPages.subPages.rolePage.to}
							icon={appPages.crmAppPages.subPages.rolePage.icon}>
							<NavItem
								{...appPages.crmAppPages.subPages.rolePage.subPages.listPage}
							/>
							<NavItem
								{...appPages.crmAppPages.subPages.rolePage.subPages.editPage}
							/>
						</NavCollapse>
					</NavCollapse>
					<NavCollapse
						text={appPages.projectAppPages.text}
						to={appPages.projectAppPages.to}
						icon={appPages.projectAppPages.icon}>
						<NavItem {...appPages.projectAppPages.subPages.projectDashboardPage}>
							<NavButton
								title='New Project'
								icon='HeroPlusCircle'
								onClick={() => {
									navigate(
										`../${appPages.projectAppPages.subPages.projectBoardPageLink.to}/new`,
									);
								}}
							/>
						</NavItem>
						<NavItem {...appPages.projectAppPages.subPages.projectBoardPage}>
							<Badge
								variant='outline'
								color='emerald'
								className='border-transparent leading-none'>
								6
							</Badge>
						</NavItem>
					</NavCollapse>
					<NavItem
						text={appPages.educationAppPages.text}
						to={appPages.educationAppPages.to}
						icon={appPages.educationAppPages.icon}>
						<Badge variant='outline' className='border-transparent leading-none'>
							Soon
						</Badge>
					</NavItem>
					<NavItem
						text={appPages.reservationAppPages.text}
						to={appPages.reservationAppPages.to}
						icon={appPages.reservationAppPages.icon}>
						<Badge variant='outline' className='border-transparent leading-none'>
							Soon
						</Badge>
					</NavItem>
				</Nav>
			</AsideBody>
			<AsideFooterPart />
		</Aside>
	);
};

export default DefaultAsideTemplate;
