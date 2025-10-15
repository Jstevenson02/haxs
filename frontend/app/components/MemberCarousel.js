// haxs/frontend/components/MemberCarousel.js

const MemberCarousel = () => {
  const members = [
    {
      name: "yabujin",
      username: "yab",
      image: "https://cdn.xoa.me/uploads/6ffb260e-1b09-4468-b377-16ef691cc19b.jpg",
      verified: false,
    },
    {
      name: "celestia.",
      username: "celestiaxdxd",
      image: "https://cdn.xoa.me/uploads/d2043b82-faec-4f6a-93f7-9f65824c2723.jpg",
      verified: true,
    },
    {
      name: "Blood",
      username: "blood",
      image: "https://cdn.xoa.me/uploads/80254028-ef7a-4d87-8dad-e02ba49e71ec.jpg",
      verified: false,
    },
    {
      name: "poor",
      username: "poor",
      image: "https://cdn.xoa.me/uploads/b6b1c93d-7422-4091-97ad-02daf285d49f.png",
      verified: false,
    },
    {
      name: "Queen",
      username: "qn",
      image: "https://cdn.xoa.me/uploads/0ad1adde-fa99-4d59-8bb2-aee233289fad.gif",
      verified: true,
    },
    {
      name: "Boston",
      username: "boston",
      image: "https://cdn.xoa.me/uploads/18f0b8bf-b940-485b-99b4-58a29d09ca9b.file",
      verified: false,
    },
    {
      name: "youssef",
      username: "vip",
      image: "https://cdn.xoa.me/uploads/d998fc7c-2ce0-47a0-ae55-e5bc9a9518ce.jpg",
      verified: true,
    },
    {
      name: "yk",
      username: "yk",
      image: "https://cdn.xoa.me/uploads/4ffe81f1-0bd7-4099-bd96-a615698eb45d.gif",
      verified: true,
    },
    {
      name: "Fallingdvwn",
      username: "falling",
      image: "https://cdn.xoa.me/uploads/a78ea847-de7d-4fc0-b98c-3b7667130e53.gif",
      verified: true,
    },
    {
      name: "faded",
      username: "chqdt",
      image: "https://cdn.xoa.me/uploads/524345b4-cfdc-44d8-9ebc-ea079dbef6f8.jpg",
      verified: true,
    },
  ];

  return (
    <div className='relative py-12 bg-gray-900'>
      <div className='mx-auto max-w-7xl px-5 relative flex w-full flex-col items-center gap-y-6 md:flex-row'>
        <h2 className='text-white max-w-sm text-center text-4xl font-semibold tracking-tight md:text-left'>
          More than 92k users trust haxs<span className='text-blue-400'>.</span>lol
        </h2>
        <div className='relative grid w-full shrink-0 grid-cols-1 gap-6 sm:grid-cols-3'>
          <div className='self-end text-center font-mono text-white lg:text-left'>
            <div className='text-blue-400 text-sm whitespace-nowrap uppercase'>Users</div>
            <div className='text-4xl md:text-3xl'>92.2K</div>
          </div>
          <div className='self-end text-center font-mono text-white lg:text-left'>
            <div className='text-blue-400 text-sm whitespace-nowrap uppercase'>Links Created</div>
            <div className='text-4xl md:text-3xl'>33.6K</div>
          </div>
          <div className='self-end text-center font-mono text-white lg:text-left'>
            <div className='text-blue-400 text-sm whitespace-nowrap uppercase'>Profile Views</div>
            <div className='text-4xl md:text-3xl'>3M</div>
          </div>
        </div>
      </div>
      <div className='relative flex items-center justify-center mt-8'>
        <div
          className='scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'
          style={{ "--animation-duration": "80s" }}
        >
          <ul
            className='flex w-max min-w-full shrink-0 flex-nowrap py-4 animate-scroll gap-12'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...members, ...members].map((member, index) => (
              <li key={index}>
                <a
                  href={`/${member.username}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative flex items-center gap-4'
                >
                  <img
                    alt={`${member.name} profile picture`}
                    loading='lazy'
                    width='48'
                    height='48'
                    className='relative size-12 rounded-full object-cover'
                    src={member.image}
                  />
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-1.5'>
                      <div className='text-white truncate text-base leading-[1.6] font-medium'>
                        {member.name}
                      </div>
                      {member.verified && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          role='img'
                          className='size-5 text-blue-400'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='M16.374 9.863a.814.814 0 0 0-1.151-1.151l-4.85 4.85l-1.595-1.595a.814.814 0 0 0-1.151 1.151l2.17 2.17a.814.814 0 0 0 1.15 0z'
                          />
                        </svg>
                      )}
                    </div>
                    <div className='text-sm leading-[1.6] font-normal text-gray-400'>
                      /{member.username}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img
          alt='Background'
          loading='lazy'
          width='250'
          height='250'
          className='absolute top-1/2 left-1/2 -z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 object-cover opacity-75'
          src='/assets/bg-blur-1.webp'
        />
      </div>
    </div>
  );
};

export default MemberCarousel;
