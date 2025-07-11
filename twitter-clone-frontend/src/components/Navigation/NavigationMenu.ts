import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

const navigation: NavigationItem[] = [
    {
        title: "Home",
        icon: HomeIcon,
        path: "/home"
    },
    {
        title: "Explore",
        icon: ExploreIcon,
        path: "/explore"
    },
    {
        title: "Notifications",
        icon: NotificationIcon,
        path: "/notification"
    },
    {
        title: "Messages",
        icon: MessageIcon,
        path: "/message"
    },
    {
        title: "Lists",
        icon: ListAltIcon,
        path: "/list"
    },
    {
        title: "Communities",
        icon: GroupIcon,
        path: "/community"
    },
    {
        title: "Verified",
        icon: VerifiedIcon,
        path: "/verified"
    },
    {
        title: "Profile",
        icon: AccountCircleIcon,
        path: "/profile"
    },
    {
        title: "Home",
        icon: PendingIcon,
        path: "/home"
    },
];

export interface NavigationItem{
    title: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    path: string,
}

export default navigation;