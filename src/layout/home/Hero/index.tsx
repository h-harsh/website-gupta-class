import { createStyles, Overlay, Container, Title, Button, Text, MediaQuery } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://s35691.pcdn.co/wp-content/uploads/2020/11/Part-Two-of-Practical-Mid-Career-Teaching-Reflections-Classroom-Activities-Throughout-the-Semester.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 400,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,
    fontWeight:600,
    fontSize:'32px',


    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '60%',
    },
  },
}));

 function Hero() {
  const { classes } = useStyles();

  return (
    <div id='0' className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}> Become a GST Practitioner</Title>
        <Text className={classes.description} size="xl" mt="xl">
         Make your Future Bright
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          <a href="#2">Get started</a>
        </Button>
      </Container>
    </div>
  );
}

export default Hero