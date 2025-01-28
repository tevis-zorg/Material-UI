import PeopleIcon from '@mui/icons-material/People'
import StorageIcon from '@mui/icons-material/Storage';
import SourceIcon from '@mui/icons-material/Source';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BarChartIcon from '@mui/icons-material/BarChart';

export const mainNavbarItems = [

    {
        id: 0,
        icon: <PeopleIcon/>,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <StorageIcon/>,
        label: 'Databases',
        route: 'databases',
    },
    {
        id: 2,
        icon: <SourceIcon/>,
        label: 'Storages',
        route: 'storages',
    },
    {
        id: 3,
        icon: <LanguageIcon/>,
        label: 'Hosting',
        route: 'hosting',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon/>,
        label: 'Functions',
        route: 'functions',
    },
    {
        id: 5,
        icon: <SmartToyIcon/>,
        label: 'MachineLearning',
        route: 'machine-learning',
    },
    {
        id: 6,
        icon: <BarChartIcon/>,
        label: "Analysist",
        route: "analysist",
    }

]