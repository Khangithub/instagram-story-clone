import {
  nGagIcon,
  dualipaIcon,
  marvelIcon,
  blackpinkIcon,
  btsIcon,
  riotIcon,
  ldsIcon,
  forniteIcon,
  sonTungIcon,
  cnnIcon,
  codingTrainIcon,
  c9Icon,
  flutterIcon,
  ascIcon,
} from './assets/imgs';

const DEFAULT__DURATION = 5;

const stories = [
  {
    username: '9gag',
    avatar: nGagIcon,
    mediaList: [
      {
        type: 'image',
        url: 'https://pbs.twimg.com/media/D2Aa7TaX4AAi9PL.png',
        duration: DEFAULT__DURATION,
        hasPoll: false,
        isWatched: false,
      },
      {
        type: 'video',
        url:
          'https://firebasestorage.googleapis.com/v0/b/instagram-clone-86a6e.appspot.com/o/instagram%2FT%C6%B0%E1%BB%A3ng%20%C4%90%C3%A0i%20Esports%20_%20_Th%C3%A1nh%20k%C3%A9o_%20-%20Madlife.mp4?alt=media&token=0e33fdc7-f9c3-4900-bde7-d7ed63515aaf',
        duration: 907,
        isWatched: false,
      },
    ],
    created: 19,
    thumbnailURL: 'https://pbs.twimg.com/media/D2Aa7TaX4AAi9PL.png',
  },
  {
    created: 22,
    username: 'dualipa',
    avatar: dualipaIcon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://billboardvn.vn/wp-content/uploads/2020/03/batch_dua-lipa-s-future-nostalgia-is-a-feminist-disco-fueled-ride-listen.webp_.jpg',
        duration: DEFAULT__DURATION,
        isWatched: false,
        hasPoll: true,
      },
      {
        type: 'video',
        url:
          'https://firebasestorage.googleapis.com/v0/b/instagram-clone-86a6e.appspot.com/o/instagram%2FCat%20High%20Five%20Then%20Meow.%20Cutest%20Cat%20High%20Five%20Ever!.mp4?alt=media&token=b7d87a6c-131b-492e-b34b-317f583aa9cc',
        duration: 40,
        isWatched: false,
      },
      {
        type: 'video',
        url:
          'https://firebasestorage.googleapis.com/v0/b/instagram-clone-86a6e.appspot.com/o/instagram%2FVID20200403214217.mp4?alt=media&token=a88d1a9f-0bc3-4ba8-b5a5-fa0cff9f9e66',
        duration: 48,
        isWatched: false,
      },
      {
        type: 'image',
        hasPoll: true,
        url:
          'https://cuoifly.tuoitre.vn/820/0/ttc/r/2020/08/26/ngay-ca-bia-album-cung-khien-dua-lipa-trong-nhu-dang-chup-anh-cho-tap-chi-thoi-trang-1598405724.jpg',
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://cuoifly.tuoitre.vn/820/0/ttc/r/2020/08/26/ngay-ca-bia-album-cung-khien-dua-lipa-trong-nhu-dang-chup-anh-cho-tap-chi-thoi-trang-1598405724.jpg',
  },
  {
    created: 12,
    username: 'marvel__offical',
    avatar: marvelIcon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://i.pinimg.com/originals/69/20/c7/6920c7f7f1c700a8d1d0e2ddc526742b.jpg',
        hasPoll: true,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
      {
        type: 'image',
        url:
          'data:image/jpeg;base64,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',
        hasPoll: false,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGRgVGBcYGBgaFRcYHxgXFxYZFxcdHSggGBomGxgYITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0vLS0tKy0tLS0vLy8tLS0tLy0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJsBRgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAQIHAAj/xABJEAACAQIEAwUEBgcFBwMFAAABAhEAAwQSITEFQVEGEyJhcTKBkaEHFEJSscEjYnKS0eHwFaKy0vEWFzNDY8LTc4KzCCQlNFP/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAMREAAgIBAwIDCAIBBQEAAAAAAAECEQMSITEEQRMiURRhcYGRocHwMrFCUnKS0eEF/9oADAMBAAIRAxEAPwBKw/DTM6ggyCND6joaK2rotkO7OCPFmBkjzJmZopxBESx4SCznLoZgDX57/ClLilhipj8dfhSynvQ0YbDNh0svGRwTyB0J9DtVqzggfUbjmK5qrMNAY8uU019lLtxriQxIPh1n0itrDoN8Vg/G37R/Gq+Is5Ikcv3Z9kt0H40xYixDtPJmJ9xJNLuPxDXWCJ7TGWPrGSeQiB7x5U8nRKKsCcVxni0bUcuSzPOd/wCHWahwGLYEakHr+XpV3HcBe3uR59DVfD4IyCeX9adD/Cpaky2gbcIpdA2XyP8AITUv1FjyqbgyNaRWcSjyFOm4Oo8idPjTEMNrVYuyMlTECxgtCYqQ2LSEC42rCQBvr16Uy4XCAHXQDUn01oDjuF943fPBzRk/Yg5dI5j8qMnQqdgq9xUZSLakENlGh15HxDXn8qxh+JXEAZtjvofCfOrrW0tGSZPIefpRbBsl62bWXIzfeA8WnIjn5Gk1Dok4M9u+I8OboNKu8Q4XlUac6WMNYe245Opg8piAD66U+8OufWLYB3UzPkRRTA0LgwPlW4wHlTeOE0p9usf9WQW0P6R5PomxPqTp8aLMkL3G+LLaLKi5iMstyEnUDzyg76bVTtceYAkoDGmQTOm/iPl1oHduFpPKdY110G/oAPdVa9zPLp6UllKHTC8dTTvEyzsYMe/+NMmEw6XFzIQw8oMeRrjzX5I3j5/GmHgPHLtlwy6LpKnZgPPkazMh/wCJcPi05jZTSrhsBm3roKYhcRhbjqI8J/DcHmKC2MJAp4iS5BC8PA5VumDFEuI3VsoXcwPxNc74v2juO3hMLWbAkOLhAYnXyitSidaQFxjkzJnb3UUwouudLmvQj5TSNsdRTG1MIDtrUhwHOpuBYO7l/SKUf7w1DD8KNHCb0YS1AlHSJ/FLOVh6fnUS4YtsJo1xzBnvE6R+dEMPZTD2jdu+1lJRevIH3k07dIVbgSzwBo1X471I/DSo1iiWAv3nGcqY31MD+J/D1qHHcR18aFemn4GNanqY9Ip28FOtSrgfKiPB71q40AnXQyNPiNBRS/gCjFTy/DlTxditC2cD5VsuB8qPHC1uuGEHypjCvjQloS3uHM0Os8YssYAM+fP4TRTiWBXExckhPEg8ypgke/8ACl/E8IW1eQqdNWPuBNc7n7zpjj4VBmxiLL/ag9DXqBYjDhhmA93Ss0niP1KvAiXB3GaH1zQ2skypiAQehDfvGpMPdVnNtpBMRoTJOkaedETbtoRkEAACDPvoRxS0C+dI1/o1qJarKqYI5pjwzoeWhjfmJ6U89k8FbTEhDrnCusbSCQw+OX40lG65KjxEbTBiJ5dRM089i+GnvHcycrEFmGoVWIVR0Om1PFWxZukX8Rl75yYy52mdokzNAuAcHOeOayzTuNSAD8KP38PndwdAS34mhXCXY273jJa3CliIkFiR79CKbLZLEkD+KOrOy5hNCk3Gw2knl1rPFrZuPOYr1J/r+pr2Ls7jMBlyD9okMY/u1JI6bY98Ha2+EtKYbLfUbSBKu0H4GiQFAOxjn6uyGcqEHWNbhzSdpACiIo8GrohwcmTkrjCDK3hzaHTaecT57Us47iLPd7pkCvP2dUCgEwekAN7ga6HZsqBSN2kwIXEOqEqMveO0wfFAgHkNaXJuLFCnjLP6Q+NdeYOoHWNx60X4bg0UgtcaNNhI+JNC5VTKgnmWAJB6QeehHxqfCXOanTmOnX/SkHGniOHs3gGtk5xv+sP41e7NXhazSpYkDRYnT9ogUPwTgHSNfmKmu4pkZjb321UkezIgimTGik3TC/Ge2WGsAe05kSFABAmGmeY108q5JxbiLcRxhZgUXUGNSlpZIH7RE+9ulZ4nxpsTcLXAgaIzIsGQNM2pnpWOzeICvcXKM7AZSROoIgEc+VK8jovLCotIq8WRO7JtpbUAwuXMGYfaLyzZyNPF+10gA7dpiJmPz9K6BYweWxcDKilsyiRMSTnI82mPIACgGGwSpMwTy6AUIz2NLHbAmGwmailjgdwr3qycupETA60Qw2HJMhDlkSY0EmNY5V1Ts1wVUtDOokjUQOYgj+vOtbbBSSBfY/DXPq9xmBgpzjxHSIAPIA1ZSzTTirYFpgAAApgDQCll7kVaOyOaTtiP9Itw+BNgBmPmTI/AVz98ORqQQPMQfnXTu1mFzXrDH7UgSJ8Q9knyDFT7qVr0vnRlJYKwBO/mP3uR60rlTKRhaBvDMICAeZ2o3ZwJttOZSfug61BhMICiqRBq1xDDOLYCTEjaJk6CDvz+dJdspppHReGePDBojY89OUa+oNb2TQLsfnNkq+vdFgDMgFokSDEjK0g9R0o7baqY9kSycgzji/pE9PzNFuJ8NzyTqisFCj9QKwJ5HU/jQXj90d7b6Zf+40y8VxYt2WbUmVICiTBUTp0GXehl4Bjq9xA4tw5FYknMep1+HSgzSAQjZeccj6jajnGL9trZfPl8WU5oJQkTDIDI01HpQmxh1XKwl5nMToZ5RBIPXYR51JF3XYJcFxiJdUXgEEBiwMiPfykGugjFW7yqyE5o9lomNwa5pirMlLo0ZNCORUmdR6n5ij/ZrGnwOxABuDpp4irSPNGBini+5OURnvwokihPEsS/1S+ygZwrRp5DX11+VHeJqAjRqNI+IoNfvZcPcI5nL8QBT5JeVsXErmkL9rGKq4fDAeJbSmSV8cjMWAmddTQHj1187AjxKCCBAgHTWdW9BTBguHWlSxiIkqsjXc6ppPRRHQQOlS4oW7jBjbOok5hHqD/GoNqzqimKmDMKAQx2YEa9dD516pOIHu7hCmOu8T6Ajzr1SaOmwdheP5rYD+0BE9dtaguYnPsTpQi3YJBI5fIefv0qzgVYNqPd1rscTzExv7LYAu0mdoDQMyyd1DAgidxBrp+GTKoH2vaboXOrmNt/61pT7J2gtsEplAMiSc2bnH6sfP0pj+shtqCXcEpdircbKxPIkz8a9fsA2XA3aD8D/OpXIoZxvi3c91EfpLnda8gUeCB+0FHvqkt0JHaQscYeHAAHh12mecx0ob/aTMWjLqArGBqBBG40MgaiDpVnieOVmkAzz6T8aBXuIhJESen8T0qCidTkdW4Q6ixaGgZlDHYE6DlzO9X5rjfB8SWu97cuRBDbxtsAfsjYU9J2uS4GUKyMVYK4gqGg5dyCNevvrpUaRySdtnRMEcwn/T3Uu9tuGhldpKh0VWI3CqWLe8yoFMOCAVdKr8eQtZYATpt1Hp/W1SasPY5Pj8YzMfDA2HppA+AFRW76jZQD1nU/lWnG8Qc50+UeVDFYnU0FE1jJYx5gCdqKXsVKW35hpAnXaNRzpTsNFacexE27caEMdR6UGqK4/wCSGu+1q8YxFlXn7Y8Nwelwa+40C4pwb6vdS7aYtaLwCfaUkE5W66TB8qGYHjV1dM2YfrCfnThicd32AyZRmbPtAlwQyt5asv7tI5J7HXKLqwLxHiOYACqmGZTOYFtNhQwOytlbT1otgrd11YWTGgmUMkEhYlZIEn060NNE9Vk+BxAu3rNm2FtgsQzbmCDmk9As6etdP4XjbhADFSBtAMxynzpC4Lw1LTByDnCld1KhjKllKjVY29d6a+HXqookJyvgZsff/Quf1TSrhWDmTRbiWInD3AN8hpc4SzZAZ3g+m/y2plwTZb7QYAuLTKPErqB5A7/hS3xQp9ZcMAdCAY1Hvov2j4xdtWka1kLK0kHZlAIInkaQ24kLrlphp1B3FLKL5K45pbFq4NdKtYXANdIWGcnkCBA6yedV8N4tIk+VMfBeBwwZiwG/MfGDSPYohk4fhhbsKmUg67xMDQSRvrJnzrZdBUl55MTIAAnr5/GahmKquCDdsCceSbqfs/maZMAwZVDAEMgVgfUgT7wKD8QWXX0/M0YwgGQfs/8AcT+Yoy4AuRY7U8HzWrioAGLhzzJgNy570ncNYAZc4JHoD6GCRI20NdF7SWDdAUCSdCM2WTGhLchufdXP72AFtznNsQdVEz5gkn8KjR0X3N2x0ETsND6HRp901Lw3FBbdtGPizZm8lPiHwUfOl3HYgM8LtmA+P8hRDhkuWYmAGZW1gwQc0dCadKkTk7Y/YHtCxAzKCpkETEHQxHPQ1fxIz2WyoGhgSo0kRBA84NJ1rGWwILM5MTkGmk8yI5nnOtNfZPGi5acjQB4Gx+yDy9aWlK0OozhU6KKPNu5ZtkSAXWdPCT4hA6Su3Njyobh77x4mLRprGnvgH41T7RWL9rFrdQ5SPY3IYH2lI5hpP8jFWLCm6rtla3lIDLqRJ6MQJ1B+XWpLgu3TKQyd4z3I12JMe6I+frWaBcYcK0TJ9dukmvVVYr3IvNToLY3gQw7ZjLZVQ3VH2S4Ma+Rj41nAcctWnCXLQNsqoW5lBYRM5hHUxpqIG4o5xjGKMSVc/o2BtN+yefqpiD+qKXu1HCWVVeAAhKEeugbTSCRy6iqnOhyt4xXUMpDKRoRtFSWLsEEHcxS52fw5tWgCdWOYj7sgafAUTW4JHqPyoilbjvaEeK2hIYGCQdoOx8zGw5b0rcZ4qGW1JlxFySToRqPnrUPFbmW5eP8A1Hj94zQju8xM8hmPoIAHxIHvqvYRK3ZYfibyZjXyPOh7GTNb3T8a0AqdFbN0JEVewt0nSSfflUe/f+uVUT7PvqextR4ByfQWFx4ZQRI05/Cs3seFBYmAKXsLicqAT5+7elDj/aOXIBkDbp5evWlBYU7T8RtXrioEUMZlgNZifEee1LF4Zd15Vpwhyzi4ZMf0flNb8QvEsNRoNeepJJoUKVhd+FR8WfwJ6/lUosg7MR6DSvYjhl11BQAiTqSBPLY0smordl8EJzlUE38AVbbWnHs9bN633ebLHsdMx3B9Y38hS6vA7/3R+8KZuy1rubg732MsgrEh/PSSB/Co64artHoS6fPoa0S+jKnEsC2ttxlcagnkeo8jtU3DQ1sRJDbEjQkQdNNwf4Ud4ziUuohkd6uhIDAFTy132G/8qH2oXlHwqni433X1OX2PqVtol9GWMODE0Swt4ggVDgceihg2u0CJ61o2NXMCIA2iDtyoeND1QPYuo/0S+jCfEr5Fi6wMEIdTqB7pE0g3+L3HnKdBpmOh8yimfn86bOI4xGtOoJllIAgb/IUo3eHM26j94fhNPHLj7yRn0fU9oS+jKL48hchPhEkT56n5zS+WkzzOtMGJ4LdOiqPew/jQ/FcEvW1LsoCiJ8QO5gfjTPNBuk0L7Hnim3Br5M14fi7qnMlxlI6fzrpPZPN3DO1xnZ3LNMTMATt5fIRXM7FuBMiiuBxr2WVwxH2T0g7abaH8TT1sc97nTzcjnWe860vJxJbqZZXNpIHtDntU/wBZkQNh8IqbHSCN64C48xRfBscnx+Wv5mlu1idRR1MQAo1A/r+vjR7AfJNirIYKdQddRuD/AEaReN8KZrpQkSdcx56wD6zAp4a5otAe0+FZijpuDH9fh8aVoKbEviPZw2VJksSocnQbMBoPfVO2Bma4RuSY13JJpn7S3WKBAZki2TzKqdT6ZhPpHWkriGKBOVdh86VpvY6cTjBPIyXEY4n089vcP69afvoyvk2Lkkn9Kf8ABbrmKAmn/wCj64yWbg2m5P8AcSnSUeCWTJPJyzoF1tK5x2h7VFsRdtqfBbXKo+/czqG28iR6KTTF2h421uyRbI71tE8urHoAJPurmDhUG8nctzY/wotJk02iS1hw7FrrHWSSNdZ/1r1Vhems1RCMO8bxma55mT+dN+Ht97gwX1ORTrzyklf8IrnOGZnuKElm2k6QPM9AOddKEWsGyk+zbCnlG/8AmpQglbp61YRoih2GbWp7+JEGAZFAAo8WuTeudA7f4j/XwqkJA/a1906fPX3CpOIP4382Y/M16+NY6Ko/uj+dUMitc3rWt3WtYpQnhU2G51CTXlaKzMPGM4v4cgBgiNN9ooOwtKczCT0Jn5bChtzHmIBqk1wkzQFoM3+JEiBCr0G9QJfA50MmtlesagsMV611r6EbS3GfOqt+jJhgD/zPOuKLdrtf0CNJc/8ATP8A8tRy8x+P4Z2dJssn+38oYO3/AAhTi8EERVFx+7YKABo6HWPJm+FHu2+AtLgb5W0gIUQQqgjxLziiXF+Hd7dwr/8A8rpc+ndXB/iy1U7en/8AH4j9j/uWkcKU3+8HRDO5ywQvh/3L/og7EcKtDA2C1tGLLnJKgk5mLDUjoRQTs7w5F4tjLbIpULmAKggZjbbQcvapme79XXBWtpdbPwsXPzUVUw+Hy8Xut9/Cq3vFwKfkBQcV5V6P8BjlleWTf8k2v+RJiuH4DFPdwxt2+9tgZgFyXFkAhlaBI1G0jkaq9oOBonDLiZUL27I8YUBjkAOaY3IXX1rXhfCLo4ticSVK2siopP2yUtTHUDKdetHbt5b9vEWlM5c1lvU21JH9+PdRS1J2t90I5vHKGmTaWmT9z2sXewmCtLw9Lly2jEm48soJ9tgNSOgFGONYrBYVVa+iKGOURazaxP2VMULZjY4Vh15kYVPe9y3m+Rar3bLs2caltBcFvIxaSuadIjcVlahUVukhpOM87nkk1Fyl+/co2rVi5w2/dS2hDLi2RsgBjPeK7iRpHpXDu0n/AOs//t/xrXdMBhO54TetTm7tMWkxEw94THLauG9oHK4dyP1f8S1Cf88fyPQ6Zrwepp7b19GKGFfXSr3eKQQR6wB/QoazkmSdal77lXpWfOUgnauAwSddNeYYaGOY11iedHF4nJZTA1MfGlAXdd6kXFGffStJ8jKVcMbBxRUuIIknnOgE9OdFOHY7vI9JE+8wfn7657iLpzK3ofLT/SjfZfHgHIx2lh5jmPjr7zWSoDds6Fbv+E+WtbPe0HmQB5edLg4iSwA9k6bcz5b8xVq/xFYRSdWbTzIiB6nWKDMLXbVSlwspgTkUeQUrPwHzpRNM3ay+WuFQPAh1PnvHwUCly2uYxzJpmZN1QW4ThZE0w8LxX1ew53ObQdTlFUuG2siiazxQ6AD9qpx3ZR7IwcSWttcYy7a/kB6eVKl4kkk7mjzNoByH8DQi+mpqhMrrXq3VK9RAOHAsKloSdcviY/ePJfQGPfFEuI3y9gjfORm/ZJlvkDS9icbACLsNT59KuW8YGtsB5SOmuvymgEm71fT36monuDkapG7WCw3msAB4zV2/aP4165ckk9Sa8x8ZP60/OooohPM1YrNYoGMRWTXq9WMYivRWa9WMYivRWa9WMYruH/0//b/9Nv8A5TXEK6x9EfaG1gkz3QxDKygJlJnvCdZYaVHM0tLfr+GdvRwlPxIxW7j+Udt4biwzYhZ/4d3Kffbt3P8AvodeP1jh9s798LJPo9xCfkaTLXbm0r45gHjEQbXsyrC13Zz+LQSF2mr3BfpAwlrDWbLpdJtpbUwEyyoGol9pFRWaL2b9TofQ5YeaMd7j/Vv7jfx3hDX3wzrcCdzdF0grOaNImRGk6671Ncsf/dpc/wCjcQ/v2iPzrlva/th9Yu23w73baouoLZZbNOoViCIA386bP952D37u9P7Nv/yUVlg5M0+i6iMIbXs9vT4jHg+J97exNj2WslFBBkkPbDBojQyWHPalP6LLrK+Ls3CS6uGYnctLo5PvUfGg+A7a2bfEL+Jh+5vKq5YXPKqgBIzRybnzrHDu12HtcQvYlVud1dSCsJnD+AkxmiJDHf7VT8VOSbfDf0Lro5xxzgo8xi/mqtf2NH0iXgqYS2NM2ItmP1V/mVrX6TOJXrFqybNxrZLkErzGUnX30pdru1trFXsM9sOEstmIbKCTmQmAGI2Wmn/edg/uXv3bf/krOcZOSuuAR6fLjjilo1VqbXx9Sbgt1n4M7MSzNaxJJO5Ja7JPnNcT7QJOHcHT2f8AEtdc4b9IuEtoVZLxm5dfQW4h7ruPt7wwpH+lftFaxiB7QYBVCnPlBnvAdIY0Hpk4NPdUVx+JjWZShUZanfpszmNu2o5T61btOByHwqvYA5/ypj4dkK6IoPPQfjXe0eL4sVwgSGU7gH1ANYbB225QeoMfLamBlU7qp9QKhfCWzyy+mny2oGeSL5Qr4+xkyqDOnv3rTBAq6nYg/Hr8pojxXCsHAUg6b7RrUVnD5fM+ZprItK9glZu69Ryq6TnuWm2yliPJssT7hLe6g4v+Rq3hMR4GM7T/AITQMyr2gxneZuQ0VR0Ubfh86XhV3GXJA9/4iqoEUWBFr+03iDB8+dXLeJL2xPLwT8/wNCCKIYB/0bD9afkKFDWWcw+FUcUdSOXzqUvVS8daIC3whAzkH7pPzFerThdzKxPlHzH8K9TIR8mFadau4a5APofwoahqZX0PwoDkzXTWhun+iKrE1qTQMYnU++tDW6Ac69cSPSsYjr1ZivRWMYr1ZisisY1r1ZivRWMYr1ZivRWMYr0CsxXorGMZfKprZB0P+lRisisYzfXWfnUeUdKlDVoRWMYAHQVNa0mBUVbTWMSsB0HyqtA6VIa0isajKoOlSSKjrIrGZKLkVuMU/JiPQxVatlFYKpFgX2+8fiasWuIOPtE+utUAayK1Da0XsVi88Fl20Ov8qzZuDoR7/wCVUCYMH0ra1dy8qDQL3ClwTWLJhXXy/lVRcUPMVk3x1oJNGbsp5CSBW9y2ADHwP5Gt7LQxrS80mmEIDVnDN4T6/lVaK3RorBJM1ROazNYNYxtYuZTXqjivUTUEuC8Uu4a53lnLmK5fEMwjMrbeqiiX+2d8Zv0WGOhmbAM6EaydYkxyEnloKvZrhhxD3kVS7rYd0UGJIe2CfMBC5jyrbC4Iauyk2ysr92ZhjPLpHU104cEckL7lIwtFQ4e5eD4iLaq1xgTmVFDmHYKpMhRmHkOtYu8IvKucp4YkMCpUjqrAw3upt4OAmFS2Gy5muXWESszkgkjmqqPcY50Q7K8LufVbviUobuW2rSy2yAS+gIJ0ZdAeVIoQjkccl0uSsunain3OaupEEgidjBqM4gdabbHZ03r5tk+Be7B7sFizu4t20tq5EFid2MKAx1iC14/6JLT3bD4W6nchUV8xcm7cUzcII2DLmMDYIaTqFCEqg7IyhTo5L3y9fxr3fr1rr+L+iq24DW0tWw6DuxnxDEsylkYyJEgHQ7ZfOgtz6HHABONtAEuNbdySEzByqxLQVMxy12qGsDVHPQwia8GFYCgaA5gCQCNiJMH316KvCKasU2mvVqBUirTrEgWYFSJh2OymjmG4KCik+J2iFUENJEgHrp0HvNdU7J9kUsIt2+oLkhUSNASQAX6wdY6DzpM2jFDVIpgj4jONPwW+ACbZAPmP41EOHXfuH5V2jhfaprl97OIt/WbTGVDW8pCzlGUECesHWou3fZ4WbZvWkD2+o0CrEAEdJ8xMxXlLq8l00j049Hgeztem6d/Y4otskxzqZMC5Egaeoqe2ua/B5ztA+ydhsKILhnUnKdDuDXp446o2eD1eZ4cjgvuBfqz9Kx3LdKZMLbA3ACwZnrt+fyq5/Ypf2IJ8Ox+9IA6cvnRaSOZdZK+BUTAXDsvzFWbfAr5AYJIPPMsfGdqJLcS2/iK3MpICCSGIOxiJXQ6jePOom4k4BF0kHObbkxEEaSBsdY00gQKzSrbc6sbyy/lS/fiUn4LeyhgEZSYDJctus9JVjB9axb4FiGEi38wPxNP3Z7h2EGSzZztfuKpeCzooCllzZgMje3AjnvrV7F4MqbYtySxYA7RE6eYIBPTUVB5UnXctKM09uDl9nhF57y4dUm6+irK66E6EmNgefKtsXwa/aOW5bKEaEGNKN8Tc2+I2zEMqqdOsPT6nbCxeti3jbHeaQtwR3g6SefvpnJqnVopjUJKpOmcgXAueXzFWsPwLEPqqTH6y/wAa6HhcJhLjsADEzPTy+dFeH8PspdAGob4bbRXZDHjavc48ubRJxTTOYW+y+Kba1PnmX+NWk7G4wCe5Hrnt/wCauz43DJhsNcxKAE21mCYnYRPx050M7V8Yw3cr3bKXKFyiDQqVdfEw8KkHUgSfBoK5M8lF+Xj3nZ08fEjvy+KOTP2PxoMGz/fT/NVux9HnEnErYGu03bQ/Fq6/gMdh1DC+V702++XLot0C3ss6hgE2Pr1AL9kOKpiUebXdvadrZUklSB7Lq0CVPXqDUpZG0tK37h0KMmpPbsfOPH+BYjB3RZxCZHKhwAysCpLKDKkjdTp5VWwvDrlyCgB1j2gNfeaevpwvI+PsshlTh11Gxi9fBI6jTehXZzFW1uhrq5lJzEAlco1A9fhyqqdRuRDJJp1EE4bs1irjZUtgkCSM6DTTXU+Yr2F7M4m5qlsHUj20Goidz510TDcWs2sXAWbTgKl0c8wWJXcCQR7xVrh4Fu3cyp4i8xtuNY6bDSni4yVo55ZckXTo5qex+MkDuhJkjxpsDBPtVhuyOLA1tgD/ANRP81dBv8Te3i0F25aW0VuDbKUCuVBLZvEPCSdBHzNTj3F8McRasm8GS4IuG0pZ1B1UCDuYHhidRrR8r4LQ8VvtX4EUdmMTAPdiCcoOdN/jWP8AZrE5svd67RmX0610p+DXLSG2TqoFwAyHUQWAaSQWCrEACWPMmSD+si7buYwuVtqVA+8IMMSOgJmOeaJEUr0pWBSya6StftiNxPhV3DlRdXKWBK+JTIBg7Exr1rNFu2uPe41lbntW0ZCYgt4vaI5TEjyIrNJG683J0S035eCh2Zxd61iUfDoXuagIATmESQQNxAoqmPdLZ7u3KFwuRw0LJBZEHOSoE7CNtaW8PYLmByGYnoJAn4kfGKZuC2WtPbuFQbLOMgfR5Xw51E6Tl2M7c9TXZHV4dIvgt0gpj8NauW7SEZFVzJM5xb3hxIhQzF9RsOs1SGISzaNpbzMqk3FSAVVCSpYNE6tlPOI21moeJWBdxF72FT2YUgnMVhdFUCPACdo0OpkVdx9y2O6RMrC1ZW2ywBmDKJkHT2izFupjnUZ5ZuWuXL5OpRT4LfBbt3BZsQEa4rWlRXWLcO7aPcJBIdELKrBSASNwKG8V+kPEiLf6TKoZG71rV57mYd25us1kBptSo8PMzO1SY+7cRL9mVdbni8JUw0FQFMahSAdPypc7QhW1VeQJbXc85O4J59SfKpxWveS54IZ8ajumG0+lfHAEC4ZmQxSySkXM6hf0W0aH5RVZ/pJxXdm2rFVKugATDgKCFVMsWhlhV3WNdRlpJIrFI0chdw4kAD0+dEsBwsuzK+ZCCqjTSTM7AzoJjn1FDsKYCnoZ+dFhx29rqCSZEicu+w9/OqPxNPkKYvDvz2Ge5tC0sW7ZVEnvTa1YEHxOIzEgx6a7xQ/F8HNtvBmYAFjmyggenMe6oG45cJBhRBBEAjXUGddQQToetWsHxG6wyxmkEEktrO+kwTrU4rPDzNqvey8vZ8nlV37l+/vcmwOILAnOy5SQzLvOkj01HrHOuzdksU2Iwi20Kl1gLmOmjB1ZtZjlG9cp7PYFSzISJc+yoJA3j8efSulcTxR4bZt27IQO6FmcmBbURBA66jU/Ol6lRnBynJ1e3o/ht6/Ipjago4opaqt77ppvnfuvmLPaNRa4h9XiFZ0Fwq2qoQuYLA000k10PiOERsE9st3oKQYIbxTKsYOnI1wzCXSwN7vGe4zhmJiGM5jA9oyeddH+jTGtcteOUNrQztcR3KjN0O/uXy05PZHFqcuPv8To8fHkilF7p/KzkXF1NnEGNSsHTpGu/lRvguKW/lGcBpjJIUx946a71r9IGH7vil5IiI033SlXBXyjSBpJM/aG4ia7Fq0qK7Hm9QsbzSk1abZ1i3wKVGzRuI8J1k7+X4VBjODsVtoHyrbBA06sXJ+Y+FQ8JfGgW7vdv3TgakjKehGumgpmw+PAOVwsjcGCetCE5p22cmTpIcJUJHaDBrYtoSql3ZlzIIOY5SDoNeYg/eoxh/qLYci5bD3GKurgHwyAI98e/wB9G+1ttHw4uKqg23DEgcmBQ/NlPuoRf4Jet4dOJPdVrdxrTXLIUghSwEBhtqdxEcqvg6tQT1R3EydO5KKUuClwPgt3B4621i5KXRnkFh4CrFTlKwwgbHmB0pw4dZPeW1uL4QzHTecpy/MfOhZ4ul+5grNgR/xVD5QWVXZ1CAHTIMuk6QNq6bjcNaUAlZMqogczoCfKuOc9W9c/Y7HjqnZ88dvLgHEFIERbSeszcqxw7i6rq6C4IjxaH49PdWfpdw4XiUAgA2rWp2Es4k1a/wB3Tgx9cTIC4LtkAGVkEwLx3Uuw6i3ymrKUlBKAFixSd5foMPB+MYJxlyG03h+zKmdGhhOg31gxW3GMels22skMRcXQc94jrHP48qqWOymW2iG7hFdIzsFJaQonO/1gAr4twAdNBUf+yVzPmOOw6hWkAa5WAusyBQ5IhUU6n7ZG6655uorTtQuPoP8A50MniRtNb+76UW+2XEHuyyNls2gLUT7bnMXcIOQgAkxuIpXxVp4t3iQENzuoG7RazT6ACP8A3+VR9qSwvPhAy3WtshzKACxcCfCCdQ1wA85mte0rhMOi6hhdzJr/AMvIUzDyJRx5xUHrkvN6s9DG8eJ+T0X/AKH+LYn9NhmtiQqWmYTyZmDT5age+qzcVvWbWIvg5Ll92sOViEAlhEaT7QHkT1pc7OsLSO9zwZjaVZynMjJczGWBGgIMR+FEuM3rRRjbJYN3amBCFgz+LYTKopmBq9FOpk8lSjGuVf0BHajiZxNyxoA1uyLJ5Kcr3GB1OmjfH1is8Ptnuz1MrEbz/ChmCuot+2zoXSRmSYLLtE8jGtF7WIS265p7uCANM0ax89TXXepbnm5Ek1Qb7Op3zrauoMqQzHYZQRmDGdoBPxq9wfjCXO97u5KqVAWDmnXxBjqRyMjkKX8MWNx0RS7XkK21Ghkg+A+gJ+AO1EeznZnEYbDi8yljiCVUWz3hhWUZmKSpUswCwdSR1FBbMRpOLkZ+ke+lx7UuveKXzyAMqkKUb0JnaNjPld7DXMLhbDcQvIly6uI7lXkwvgWSigEFtSdpiKo9qey17ERdCspBy5Tavm44ZhkygIVK+KRB1k+VVcJw7FW8PiMGcJibudke2Vs3ggdVAdgCgIYDL8ADQe7OqLaxKudh07RcYS4zXFJZbqpkO0iHCjadZHKRE1z9Mf3eFxCOocXSCmvhQ+J2g7iRAFVuIWr1trAupdtZlCqHUoe7zeEgEfeLGRptWuOtFnYOQgURDLINz7ULuYVZ99Ooqtzm81qgdxVpZfGzqbdtxmbMVzKJWfIj8KzVI3s7MYgaKAOQACj5CvUpdstYQeI6wMp9DtoeomPhRrh91iIe4/UGdYgggnfYxG1Lriq5QV0Rz1DTRfFlUO1j/wANxzL47K2jcAPiYA3NiAFJ9ZqXD8PUNnbN3rMS7Mol5jTNuJ1nblFc6yDpXsg6VytNuyr6pN3p+50vCcKsIQl653UOWB9pbTAAgdSjdfSgHaTgxtjLbbPabx22GxUmSJ6g8/OlPIOleyDpVYzpU9yeTPq7UaYqyVOojnUFWsg6VsFFTe7IG2H9kVvWY0qAoOlVjPSqBRZWiWDxBOjeLl50DyivZB0oucZbSjYYynB3B0dO7I4cW7qsqkCRpuN6l+lq2zYlLokWbwFhxO1y2BJUTIEGOhiuWZB0r2QdKnOTlW+y4vf7jKUV5tKUny1tfy4XyGLA2CAoYhQTy3iRIHNm1HUfOutdoOEjD4fDXbEoyBbd4RJi4qqrsBoSp1mOfrXA8g6VkWx0pZbu0NDLpVMcfpBxGbibXGy6myTvl0Cg5g2oGhkGoEv2CQZw49vlb2kb9WPI77xS4BpUJQdKSWPV3Hhn035U7Gj+0VDIBdtAFfFlywDKgDpO59Jqza4ig/59oGCd1nkd+uvypMyivZRU3g9466tr/FDne7UfoQpuD9KgDRDFObAr1JMa9DVzi3aC1cw1mwuIAFsXFgq+XViU0IgxMTOnQ0gZRXsop1hSIyytux+7C8ZtYe6LjrmI8IbOJUnnlBgiSR5TNdJftskRDH0gjr1r54yDpWRbHSllht2mBT2pobvpJx3fYwuJ/wCGi676Fj+dVuC9rb2FtC3bS2QCxn9IrElWUyUcaw2++g1oCBpULKKppe25lNU00NzfSHecotyzYKK9t1AFwZMjBlgC5qAwLQZEs3WmLFdtrQIPfDMt3vgV7wzcNs22bcq0qdRopLMfvZuW5RXsorODfcaGSMf8U/iM39r2lRktZ7l1mLG+YV2JfPmL+0x5bDWTQ7iDXfAl0n2UKz9zUj8Y9QaFZRXsg6UPDM8t9vcHP7QZ1VmCgIO7A1GbUvqB5wSeqrEaU1cZ7PunDlxKKFt3F8QWSM3h1jlqDXOcgrIQdKnPDJtNOqHjnSu48+8nuNzE6CqzXjIM7f61ZUaVCyCuhbI55U3YZ4BxdVvKbzEWyr23IksqujI5WNc8GB603v8ASVk7woEbvJVbaG6otoRYXd1hWVLCqMmknNy15rlFeyijYmlHSk+lg/pAcL4brm45W6ocEqU0ItAeFe6jTe0CSSSagX6VWDFhhVAKd3AdRlBa47ZCLWZZdlYamDbERJrnmUV7KKAaDnantKcXfF42whEADNO0GSQFBJaWJAGrHzNCL2LZiDJkMXBnnp/l+dRZRWQgrWajfDjf1r1SIK9RCf/Z',
  },
  {
    created: 1,
    username: 'blackpink__official',
    avatar: blackpinkIcon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/1/28/875222/Blackpink.jpg?w=414&h=276&crop=auto&scale=both',
        hasPoll: true,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/1/28/875222/Blackpink.jpg?w=414&h=276&crop=auto&scale=both',
  },
  {
    created: 7,
    username: 'bts_official__bighit',
    avatar: btsIcon,
    mediaList: [
      {
        type: 'video',
        url:
          'https://firebasestorage.googleapis.com/v0/b/instagram-clone-86a6e.appspot.com/o/instagram%2FVID20201219104319.mp4?alt=media&token=3cb70eab-78ef-4bb9-82ee-8c79eb1ab2e3',
        duration: 20,
        isWatched: false,
      },
      {
        type: 'image',
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6FwuD0EeUmHf8wejT2546hnKzdpy2ty4Fw&usqp=CAU',
        hasPoll: true,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6FwuD0EeUmHf8wejT2546hnKzdpy2ty4Fw&usqp=CAU',
  },
  {
    created: 17,
    username: '@cnn__broadcast',
    avatar: cnnIcon,
    mediaList: [
      {
        type: 'video',
        url:
          'https://firebasestorage.googleapis.com/v0/b/instagram-clone-86a6e.appspot.com/o/instagram%2FVID20201227113206.mp4?alt=media&token=83cfe4bd-097c-4306-9d1e-2e44b78dbdb0',
        duration: 18,
        isWatched: false,
      },
      {
        type: 'image',
        url:
          'https://dynaimage.cdn.cnn.com/cnn/livestory/w_460/3a9e936a-1537-4914-a1d5-c30c3b822dba.jpg',
        hasPoll: false,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://dynaimage.cdn.cnn.com/cnn/livestory/w_460/3a9e936a-1537-4914-a1d5-c30c3b822dba.jpg',
  },
  {
    created: 14,
    username: '@riot__games',
    avatar: riotIcon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2d197ac5fc64cea0/5f6d48e8f972ad4f39420e6b/Asset_Banner.jpg',
        hasPoll: true,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://i.pinimg.com/originals/b2/5f/4f/b25f4f533a0855df0e37a8edeb96c3ba.png',
  },
  {
    created: 9,
    username: 'thecodingtrain',
    avatar: codingTrainIcon,
    mediaList: [
      {
        type: 'video',
        url:
          'https://firebasestorage.googleapis.com/v0/b/instagram-clone-86a6e.appspot.com/o/instagram%2Fscreen_recorder_video_2020_07_12_15_41_32.mp4?alt=media&token=cda4a705-fb5b-49e9-b2ed-e2653cbebd10',
        duration: 5,
        isWatched: false,
      },
      {
        type: 'image',
        url: 'https://shiffman.net/images/train.png',
        hasPoll: true,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
      {
        type: 'image',
        url: 'https://i.ytimg.com/vi/wKGKYAnlyRQ/maxresdefault.jpg',
        hasPoll: false,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL: 'https://shiffman.net/images/train.png',
  },
  {
    created: 8,
    username: 'lds__promote',
    avatar: ldsIcon,
    mediaList: [
      {
        type: 'image',
        hasPoll: true,
        url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jonesboro_Chapel.JPG/1200px-Jonesboro_Chapel.JPG',
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jonesboro_Chapel.JPG/1200px-Jonesboro_Chapel.JPG',
  },
  {
    created: 23,
    username: 'c9__lol',
    avatar: c9Icon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://cdn1.dotesports.com/wp-content/uploads/2019/03/02163409/Despite-a-rough-beginning-Cloud9-will-regroup-for-the-coming-matches.-1.jpg',
        hasPoll: false,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://cdn1.dotesports.com/wp-content/uploads/2019/03/02163409/Despite-a-rough-beginning-Cloud9-will-regroup-for-the-coming-matches.-1.jpg',
  },
  {
    created: 17,
    username: 'fornite__epic',
    avatar: forniteIcon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fseason-x-blog%2F10BR_Announce_KeyArt_BlogHeader-1920x1080-aca2c821a0e9ece24d5545ce7171d58f76598013.jpg',
        hasPoll: true,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fseason-x-blog%2F10BR_Announce_KeyArt_BlogHeader-1920x1080-aca2c821a0e9ece24d5545ce7171d58f76598013.jpg',
  },
  {
    created: 22,
    username: 'assassin_creed_odyssey',
    avatar: ascIcon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://static.techspot.com/images/products/2018/pc-games/org/2018-10-01-product-10.jpg',
        hasPoll: true,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://static.techspot.com/images/products/2018/pc-games/org/2018-10-01-product-10.jpg',
  },
  {
    created: 6,
    username: '@son_tung_mtp',
    avatar: sonTungIcon,
    mediaList: [
      {
        type: 'image',
        hasPoll: true,
        url:
          'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/1/29/875504/Son-Tung-Mtp-Am-Tham.png',
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/1/29/875504/Son-Tung-Mtp-Am-Tham.png',
  },
  {
    created: 15,
    username: 'flutter__community',
    avatar: flutterIcon,
    mediaList: [
      {
        type: 'image',
        url:
          'https://www.freecodecamp.org/news/content/images/2019/12/what-is-flutter-and-why-you-should-learn-it-in-2020.png',
        hasPoll: false,
        duration: DEFAULT__DURATION,
        isWatched: false,
      },
    ],
    thumbnailURL:
      'https://www.freecodecamp.org/news/content/images/2019/12/what-is-flutter-and-why-you-should-learn-it-in-2020.png',
  },
];

export default stories;
