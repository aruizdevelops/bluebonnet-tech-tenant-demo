'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ABOUT } from '../../constants/content';

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="overline"
                component="p"
                sx={{ color: 'primary.main', mb: 2 }}
              >
                {ABOUT.overline}
              </Typography>
              <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                {ABOUT.headline}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {ABOUT.description}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <List disablePadding>
              {ABOUT.highlights.map((item) => (
                <ListItem key={item} disablePadding sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleOutlineIcon
                      sx={{ color: 'secondary.main', fontSize: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      variant: 'body1',
                      color: 'text.primary',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
