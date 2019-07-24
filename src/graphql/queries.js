// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSkills = `query GetSkills($id: ID!) {
  getSkills(id: $id) {
    id
    name
    fullName
    description
    certified
    category
    subCategory
    icon
    rating
    user {
      id
      about
      answered
      answers
      asked
      avatar
      balance
      cognitoId
      earned
      email
      entities
      first
      friends
      lang
      last
      locations
      rating
      status
      username
      accountNumber
      stripeCustomerId
    }
  }
}
`;
export const listSkillss = `query ListSkillss(
  $filter: ModelSkillsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkillss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      fullName
      description
      certified
      category
      subCategory
      icon
      rating
    }
    nextToken
  }
}
`;
export const getCertificates = `query GetCertificates($id: ID!) {
  getCertificates(id: $id) {
    id
    name
    origin
    originURL
    description
    category
    subCategory
    icon
    status
    user {
      id
      about
      answered
      answers
      asked
      avatar
      balance
      cognitoId
      earned
      email
      entities
      first
      friends
      lang
      last
      locations
      rating
      status
      username
      accountNumber
      stripeCustomerId
    }
  }
}
`;
export const listCertificatess = `query ListCertificatess(
  $filter: ModelCertificatesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificatess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      origin
      originURL
      description
      category
      subCategory
      icon
      status
    }
    nextToken
  }
}
`;
export const getAnswer = `query GetAnswer($id: ID!) {
  getAnswer(id: $id) {
    id
    accessible
    answer
    author
    authorId
    bch
    bounty
    createdAt
    credit
    degree
    lang
    licence
    modifiedAt
    questionId
    question {
      id
      accessible
      author
      authorId
      bch
      comments
      count
      createdAt
      d1
      d2
      d3
      d4
      entity
      entityId
      entityLogo
      lang
      myAnswer
      question
      rated
      status
      taskId
    }
    rating
    status
  }
}
`;
export const listAnswers = `query ListAnswers(
  $filter: ModelAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      accessible
      answer
      author
      authorId
      bch
      bounty
      createdAt
      credit
      degree
      lang
      licence
      modifiedAt
      questionId
      rating
      status
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    eventId
    commentId
    content
    createdAt
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      eventId
      commentId
      content
      createdAt
    }
    nextToken
  }
}
`;
export const getEntity = `query GetEntity($id: ID!) {
  getEntity(id: $id) {
    id
    answerCount
    createdAt
    createdBy
    description
    displayName
    locations
    logo
    members
    modifiedAt
    name
    parentEntity
    q1d
    q2d
    q3d
    q4d
    q5d
    questionCount
    questions
    score
    skills
    status
    theme
    wall
    website
  }
}
`;
export const listEntitys = `query ListEntitys(
  $filter: ModelEntityFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      answerCount
      createdAt
      createdBy
      description
      displayName
      locations
      logo
      members
      modifiedAt
      name
      parentEntity
      q1d
      q2d
      q3d
      q4d
      q5d
      questionCount
      questions
      score
      skills
      status
      theme
      wall
      website
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    assignedTo
    bounty
    comments
    count
    createdAt
    createdBy
    description
    entity
    modifiedAt
    name
    questions
    status
    when
    where
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      assignedTo
      bounty
      comments
      count
      createdAt
      createdBy
      description
      entity
      modifiedAt
      name
      questions
      status
      when
      where
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    accessible
    answers {
      nextToken
    }
    author
    authorId
    bch
    comments
    count
    createdAt
    d1
    d2
    d3
    d4
    entity
    entityId
    entityLogo
    lang
    myAnswer
    question
    rated
    status
    task {
      id
      assignedTo
      assignedToName
      bounty
      comments
      count
      createdAt
      createdBy
      description
      entity
      entityId
      entityLogo
      modifiedAt
      name
      status
      when
      where
      transaction
      paidAmount
      paidBy
      paidAt
      goal
      transferTo
      transferAt
      transferId
    }
    taskId
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      accessible
      author
      authorId
      bch
      comments
      count
      createdAt
      d1
      d2
      d3
      d4
      entity
      entityId
      entityLogo
      lang
      myAnswer
      question
      rated
      status
      taskId
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    assignedTo
    assignedToName
    bounty
    comments
    count
    createdAt
    createdBy
    description
    entity
    entityId
    entityLogo
    modifiedAt
    name
    questions {
      nextToken
    }
    status
    when
    where
    transaction
    paidAmount
    paidBy
    paidAt
    goal
    transferTo
    transferAt
    transferId
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      assignedTo
      assignedToName
      bounty
      comments
      count
      createdAt
      createdBy
      description
      entity
      entityId
      entityLogo
      modifiedAt
      name
      status
      when
      where
      transaction
      paidAmount
      paidBy
      paidAt
      goal
      transferTo
      transferAt
      transferId
    }
    nextToken
  }
}
`;
export const getVariant = `query GetVariant($id: ID!) {
  getVariant(id: $id) {
    id
    accessible
    author
    bch
    createdAt
    lang
    parentQuestion
    question
    rated
    status
  }
}
`;
export const listVariants = `query ListVariants(
  $filter: ModelVariantFilterInput
  $limit: Int
  $nextToken: String
) {
  listVariants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      accessible
      author
      bch
      createdAt
      lang
      parentQuestion
      question
      rated
      status
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    about
    answered
    answers
    asked
    avatar
    balance
    cognitoId
    earned
    email
    entities
    first
    friends
    lang
    last
    locations
    rating
    status
    username
    accountNumber
    stripeCustomerId
    skills {
      nextToken
    }
    certificates {
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      about
      answered
      answers
      asked
      avatar
      balance
      cognitoId
      earned
      email
      entities
      first
      friends
      lang
      last
      locations
      rating
      status
      username
      accountNumber
      stripeCustomerId
    }
    nextToken
  }
}
`;
export const getStripeCustomer = `query GetStripeCustomer($id: ID!) {
  getStripeCustomer(id: $id) {
    id
    cognitoId
    cust_id
    cust_email
    brand
    last4
    created
  }
}
`;
export const listStripeCustomers = `query ListStripeCustomers(
  $filter: ModelStripeCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listStripeCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cognitoId
      cust_id
      cust_email
      brand
      last4
      created
    }
    nextToken
  }
}
`;
