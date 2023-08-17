import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './services.css'
import {icons} from '../../../data/icons'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HomeContentServices = () => {
    return <div className="home-content-services__container">
        <Grid className='container-body' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {[icons.ExtractText, icons.Distance, icons.GoodPrice].map((_, index) => (
                <Grid className='items-container' item xs={2} sm={4} md={4} key={index}>
                    <Item title={_.detail}>
                        <h1 className='service-name'>{_.name}</h1>
                        <div className='service-items'>
                            <img src={_.url} />
                        </div>
                        {/* <p className='service-detail'>{_.detail}</p> */}
                    </Item>
                </Grid>
            ))}
        </Grid>
    </div>
}

export default HomeContentServices