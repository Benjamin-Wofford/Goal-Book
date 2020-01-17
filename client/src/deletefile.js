{goal.comments.map(comment => (  
    <Grid
      className={classes.paper}
      key={comment._id}
      spacing={1}
      container
      item
      direction="row"
      alignItems="center"
      component={Paper}
    >
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={3}
      >
        <Link to={`/profile/user/${comment.user}`}>
          {" "}
          <Avatar className={classes.avatar} src={comment.avatar} />
        </Link>

        <Typography variant="caption">
          {comment.first_name} {comment.last_name}
        </Typography>
        <Typography variant="caption" className={classes.postedOn}>
          Posted on <Moment format="MM/DD/YYYY">{comment.date}</Moment>
        </Typography>
      </Grid>
      <Grid container item direction="column" xs={9}>
        <Typography variant="body1">{comment.text}</Typography>
      </Grid>
      </Grid>
  ))}