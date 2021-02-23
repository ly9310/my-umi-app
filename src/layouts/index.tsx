import { NavLink, IRouteComponentProps, IRoute } from 'umi';
import routers from '../routes';

export default function Layouts({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', height: "100vh"}}>
      <div style={{width: 200, height: "100%"}}>
        {
          routers.map((link: IRoute, idx) => {
            return link?.routes?.map((link, index) => (
              <NavLink
                key={index}
                activeStyle={{color: 'red'}}
                isActive={(match, location) => {
                  return !!match?.isExact
                }}
                to={`${link.path}`}
              >{link.title}<br /></NavLink>
            ))
          })
        }
      </div>
      <div style={{flex: 1, height: "100%"}}>
        <div style={{height: 80}}>NAV</div>
        <div>{children}</div>
      </div>
    </div>
  )
}
