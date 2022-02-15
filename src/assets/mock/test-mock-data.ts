import { LearningModel, UserModel } from '@app/models';

export const TEST_MOCK_DATA: {user: UserModel, allUsers: UserModel[], learning: LearningModel, allLearnings: LearningModel[]} = {
  user: {
    id: 7,
    firstName: 'Beulah',
    lastName: 'Ferson',
    email: 'bferson6@hibu.com',
    image: 'https://robohash.org/omnisremet.png?size=200x200&set=set1',
    assignedLearnings: [
      {
        id: 4,
        name: 'Regrant',
        description:
          'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        active: true,
        createdAt: '2021-07-02T06:33:22Z',
      },
      {
        id: 5,
        name: 'Biodex',
        description:
          'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        active: false,
        createdAt: '2021-07-31T12:30:09Z',
      },
    ],
    createdAt: '2021-09-17T22:31:39Z'
  },

  allUsers: [
    {
      id: 26,
      firstName: 'Tabor',
      lastName: 'Maltby',
      email: 'tmaltbyp@spiegel.de',
      image: 'https://robohash.org/utmagnamdignissimos.png?size=200x200&set=set1',
      assignedLearnings: [
        {
          id: 6,
          name: 'Andalax',
          description:
            'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
          active: false,
          createdAt: '2022-02-03T01:57:36Z',
        },
      ],
      createdAt: '2022-02-08T19:34:43Z'
    },
    {
      id: 27,
      firstName: 'Saxon',
      lastName: 'Jemmett',
      email: 'sjemmettq@discuz.net',
      image:
        'https://robohash.org/corporisetblanditiis.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-06-17T10:59:46Z'
    },
    {
      id: 28,
      firstName: 'Bealle',
      lastName: 'Martschik',
      email: 'bmartschikr@sun.com',
      image: 'https://robohash.org/nonbeataeexplicabo.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-04-30T19:50:37Z'
    },
    {
      id: 29,
      firstName: 'Duff',
      lastName: 'De Laci',
      email: 'ddelacis@ucoz.com',
      image: 'https://robohash.org/impeditidipsa.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-01-04T12:39:33Z'
    },
    {
      id: 30,
      firstName: 'Merell',
      lastName: 'Scaddon',
      email: 'mscaddont@mozilla.org',
      image: 'https://robohash.org/eaetfugit.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-08-08T05:10:59Z'
    },
    {
      id: 31,
      firstName: 'Iolanthe',
      lastName: 'Olech',
      email: 'iolechu@livejournal.com',
      image: 'https://robohash.org/itaquequiaet.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-10-21T05:24:30Z'
    },
    {
      id: 32,
      firstName: 'Florance',
      lastName: 'McHan',
      email: 'fmchanv@seattletimes.com',
      image:
        'https://robohash.org/quivoluptatemsimilique.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-05-23T20:06:54Z'
    },
    {
      id: 33,
      firstName: 'Leonerd',
      lastName: 'Turbill',
      email: 'lturbillw@aboutads.info',
      image: 'https://robohash.org/rerumvoluptateullam.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-11-20T22:37:03Z'
    },
    {
      id: 34,
      firstName: 'Carrol',
      lastName: 'Gouldie',
      email: 'cgouldiex@nytimes.com',
      image: 'https://robohash.org/aliquamquasest.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-03-06T20:11:04Z'
    },
    {
      id: 35,
      firstName: 'Ive',
      lastName: 'Lindeman',
      email: 'ilindemany@shutterfly.com',
      image: 'https://robohash.org/quiofficiadoloribus.png?size=200x200&set=set1',
      assignedLearnings: [],
      createdAt: '2021-07-09T10:53:03Z'
    }
  ],

  learning: {
    id: 6,
    name: 'Andalax',
    description:
      'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    active: false,
    assignedUsers: [
      {
        id: 26,
        firstName: 'Tabor',
        lastName: 'Maltby',
        email: 'tmaltbyp@spiegel.de',
        image:
          'https://robohash.org/utmagnamdignissimos.png?size=200x200&set=set1',
        createdAt: '2022-02-08T19:34:43Z',
      },
      {
        id: 85,
        firstName: 'Huntley',
        lastName: 'Swedeland',
        email: 'hswedeland2c@livejournal.com',
        image: 'https://robohash.org/ametillofuga.png?size=200x200&set=set1',
        createdAt: '2022-02-01T17:42:07Z',
      },
      {
        id: 64,
        firstName: 'Verile',
        lastName: 'Willson',
        email: 'vwillson1r@mediafire.com',
        image:
          'https://robohash.org/voluptateducimussed.png?size=200x200&set=set1',
        createdAt: '2022-01-28T02:22:06Z',
      },
      {
        id: 71,
        firstName: 'Fifine',
        lastName: 'Castanyer',
        email: 'fcastanyer1y@tinyurl.com',
        image:
          'https://robohash.org/dignissimoscumquenihil.png?size=200x200&set=set1',
        createdAt: '2021-12-27T22:56:09Z',
      },
    ],
    createdAt: '2022-02-03T01:57:36Z',
  },

  allLearnings: [
    {
      id: 1,
      name: 'Mat Lam Tam',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2022-01-20T07:40:26Z',
    },
    {
      id: 2,
      name: 'Zaam-Dox',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2021-11-29T19:18:13Z',
    },
    {
      id: 3,
      name: 'Bytecard',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2021-03-25T13:12:50Z',
    },
    {
      id: 4,
      name: 'Regrant',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2021-07-02T06:33:22Z',
    },
    {
      id: 5,
      name: 'Biodex',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2021-07-31T12:30:09Z',
    },
    {
      id: 6,
      name: 'Andalax',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [
        {
          id: 26,
          firstName: 'Tabor',
          lastName: 'Maltby',
          email: 'tmaltbyp@spiegel.de',
          image:
            'https://robohash.org/utmagnamdignissimos.png?size=200x200&set=set1',
          assignedLearnings: [],
          createdAt: '2022-02-08T19:34:43Z',
          count: 26,
        },
        {
          id: 85,
          firstName: 'Huntley',
          lastName: 'Swedeland',
          email: 'hswedeland2c@livejournal.com',
          image: 'https://robohash.org/ametillofuga.png?size=200x200&set=set1',
          assignedLearnings: [],
          createdAt: '2022-02-01T17:42:07Z',
          count: 85,
        },
        {
          id: 64,
          firstName: 'Verile',
          lastName: 'Willson',
          email: 'vwillson1r@mediafire.com',
          image:
            'https://robohash.org/voluptateducimussed.png?size=200x200&set=set1',
          assignedLearnings: [],
          createdAt: '2022-01-28T02:22:06Z',
          count: 64,
        },
        {
          id: 71,
          firstName: 'Fifine',
          lastName: 'Castanyer',
          email: 'fcastanyer1y@tinyurl.com',
          image:
            'https://robohash.org/dignissimoscumquenihil.png?size=200x200&set=set1',
          assignedLearnings: [],
          createdAt: '2021-12-27T22:56:09Z',
          count: 71,
        },
      ],
      createdAt: '2022-02-03T01:57:36Z',
    },
    {
      id: 7,
      name: 'Tempsoft',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [],
      createdAt: '2021-03-31T00:12:03Z',
    },
    {
      id: 8,
      name: 'Holdlamis',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [],
      createdAt: '2021-08-10T04:12:39Z',
    },
    {
      id: 9,
      name: 'Aerified',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2021-06-03T17:47:14Z',
    },
    {
      id: 10,
      name: 'Wrapsafe',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [],
      createdAt: '2021-06-21T23:17:56Z',
    },
    {
      id: 11,
      name: 'Tres-Zap',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [],
      createdAt: '2021-04-23T22:12:17Z',
    },
    {
      id: 12,
      name: 'Konklab',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [],
      createdAt: '2022-01-01T19:22:43Z',
    },
    {
      id: 13,
      name: 'Lotstring',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2021-01-07T04:50:49Z',
    },
    {
      id: 14,
      name: 'Opela',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [],
      createdAt: '2021-12-31T20:02:21Z',
    },
    {
      id: 16,
      name: 'Domainer',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: false,
      assignedUsers: [],
      createdAt: '2021-12-28T00:34:26Z',
    },
    {
      id: 17,
      name: 'Namfix',
      description:
        'Text desc: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      active: true,
      assignedUsers: [],
      createdAt: '2021-01-07T16:20:37Z',
    },
  ]
}