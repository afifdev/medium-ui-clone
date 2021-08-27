import Head from "next/head";
import Image from "next/image";
import Bg from "../public/assets/images/background.png";
import MorePostImg from "../public/assets/images/morepost.png";
import Avatar from "../public/assets/images/avatar.jpeg";
import ShortLevelUp from "../public/assets/images/shortlevelup.png";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import List from "../components/List";
import Subheading from "../components/Subheading";
import MorePostCard from "../components/MorePostCard";
import Sponsor from "../public/assets/images/sponsor.png";
import Socmed from "../components/Socmed";
import Credit from "../components/Credit";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          The Ultimate Guide to CSS + Cheat Sheets 📑 | by Bradley Nice | Level
          Up! | Medium
        </title>
      </Head>
      <Navbar />
      <Heading />
      <Image src={Bg} layout="responsive" quality={100} />
      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr minmax(0,48rem) 1fr" }}
      >
        <div className="">1</div>
        <div className="px-4 md:px-12 w-full font-doulos text-gray-900 text-xl md:text-1.5xl tracking-tight md:tracking-tiny leading-8 clear-left break-words">
          <p className="md:pt-4 my-8 pb-6 md:pb-14">
            <span className="relative pt-3 pl-1 pr-3 text-7xl float-left block leading-10">
              C
            </span>
            SS is a language that describes the style of an HTML document and
            its elements. Learn how to use CSS to create beautiful web pages.
            For those of you still learning CSS, or wanting to go a little
            deeper into specific CSS subjects, I’d put together a list of
            learning resources that I’ve come across in recent months.
          </p>
          <p className="my-6">
            I might have missed something important, so please suggest your
            categories and resources in the comments and I’ll make the edits in
            the following list!
          </p>
          <Subheading>CSS Selectors</Subheading>
          <Paragraph>
            CSS selectors define the elements to which a set of CSS rules apply.
            From there you can move into advanced selectors and pseudoselectors.
            This is a starting point of CSS learning.
          </Paragraph>
          <List>
            <li>Beginner Concepts: How CSS Selectors Work</li>
            <li>Level up your CSS selector skills</li>
            <li>CSS selectors | MDN Web Docs</li>
          </List>
          <Subheading>CSS Box Model</Subheading>
          <Paragraph>
            CSS box model explains how to manipulate elements on your page. It
            is essential knowledge for CSS newbies.
          </Paragraph>
          <List>
            <li>Opening the Box Model | ShayHowe</li>
            <li>The box model | MDN web docs</li>
            <li>The CSS Box Model | CSS-Tricks</li>
          </List>
          <Subheading>CSS Layout</Subheading>
          <Paragraph>
            Layout involves manipulating how elements lay out on the page. Learn
            how to manipulate this to create exactly the design you desire.
          </Paragraph>
          <List>
            <li>Getting Started With CSS Layout | Smashing Magazine</li>
            <li>
              The Ultimate Guide to Flexbox — Learning Through Examples by{" "}
              <span className="text-green-700">Ohans Emmanuel</span>
            </li>
            <li>A Complete Guide to Grid | CSS-Tricks</li>
            <li>Grid Layout Cheat Sheet (PDF)</li>
          </List>
          <Subheading>Styling Text with CSS</Subheading>
          <Paragraph>
            Text is a fundamental block of any web site. Learn how to apply some
            design to it via CSS.
          </Paragraph>
          <List>
            <li>Fundamental text and font styling | MDN Web Docs</li>
            <li>Styling lists | MDN Web Docs</li>
          </List>
          <Subheading>CSS Units</Subheading>
          <Paragraph>
            Units are used to define the positioning, size and other parameters.
          </Paragraph>
          <List>
            <li>CSS values and units | MDN web docs</li>
            <li>A Look at CSS Viewport Units | Alligator.io</li>
            <li>Calc() function with Use Cases | Pineco</li>
          </List>
          <Subheading>CSS Colors and Gradients</Subheading>
          <List>
            <li>Color | MDN web docs</li>
            <li>CSS Gradients | CSS-Tricks</li>
          </List>
          <Subheading>CSS Transitions and Animations</Subheading>
          <List>
            <li>CSS Transitions explained | Zell</li>
            <li>CSS Transitions | CSS3 = Awesome</li>
          </List>
          <MorePostCard
            title="Top 20 Best Free CSS3 Frameworks for Web Development"
            image={MorePostImg}
          />
          <MorePostCard
            title="148 Resources to Help You Become a CSS Expert"
            image={MorePostImg}
          />
          <Subheading>CSS Pseudo-classes and Pseudo-elements</Subheading>
          <List>
            <li>
              Learning To Use The :after And :before Pseudo-Elements In CSS |
              Smashing Magazine
            </li>
            <li>
              A Whole Bunch of Amazing Stuff Pseudo Elements Can Do | CSS-Tricks
            </li>
            <li>
              How CSS pseudo-classes work, explained with code and lots of
              diagrams by Nash Vail
            </li>
            <li>
              A Whole Bunch of Amazing Stuff Pseudo Elements Can Do | CSS-Tricks
            </li>
          </List>
          <Subheading>CSS Preprocessors</Subheading>
          <List>
            <li>Sass Basics | sass-lang.com</li>
            <li>Learn LESS in 10 Minutes (or Less) | Tutorialzine</li>
          </List>
          <Subheading>CSS Naming Systems and Architecture</Subheading>
          <List>
            <li>BEM For Beginners: Why You Need BEM | Smashing Magazine</li>
          </List>
          <Subheading isBig>CSS Cheat Sheets</Subheading>
          <List>
            <li>Comprehensive CSS Cheat Sheet + PDF | OnBlastBlog</li>
            <li>The Mega CSS3 Cheat Sheet</li>
            <li>CSS Cheat Sheet | Hostinger Tutorials</li>
            <li>CSS Cheat Sheat Infographic | CSS Author</li>
            <li>CSS Almanac | CSS-Tricks</li>
          </List>
          <Subheading isBig>MORE</Subheading>
          <MorePostCard
            title="Free Apps & Tools For Working With CSS"
            image={MorePostImg}
          />
          <MorePostCard
            title="Top 20 Best Free CSS3 Frameworks for Web Development"
            image={MorePostImg}
          />
          <MorePostCard
            title="148 Resources to Help You Become a CSS Expert"
            image={MorePostImg}
          />
          <MorePostCard title="Best CSS Books" image={MorePostImg} />
          <div className="flex justify-center mt-12 mb-16">
            <div className="w-1 h-1 rounded-full bg-gray-800 mx-3"></div>
            <div className="w-1 h-1 rounded-full bg-gray-800 mx-3"></div>
            <div className="w-1 h-1 rounded-full bg-gray-800 mx-3"></div>
          </div>
          <Paragraph>
            <i>
              What are other essential CSS resources for newbies? What
              categories does this list lack? Any suggestions? Please, share you
              favorite CSS websites and resources and I’ll add them to the list.
            </i>
          </Paragraph>
          <Paragraph>Have a nice day!</Paragraph>
          <Paragraph>
            Bradley Nice,
            <br />
            Content Manager at{" "}
            <span className="underline font-bold">
              ClickHelp.com — best online documentation tool for SaaS vendors
            </span>
          </Paragraph>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 mb-16">
        <Image src={Sponsor} quality={100} />
      </div>
      <div className="mx-auto max-w-3xl px-4 md:px-12 w-full font-doulos text-gray-900 text-1.5xl tracking-tiny leading-8 clear-left break-words">
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 font-sans pa-4 pb-8">
          <a className="bg-gray-100 px-3 py-2 rounded">CSS</a>
          <a className="bg-gray-100 px-3 py-2 rounded">Web Development</a>
          <a className="bg-gray-100 px-3 py-2 rounded">Web Design</a>
          <a className="bg-gray-100 px-3 py-2 rounded">Front End Development</a>
          <a className="bg-gray-100 px-3 py-2 rounded">Coding</a>
        </div>
        <div className="flex font-sans text-sm justify-between mb-8">
          <div className="flex justify-center items-center gap-12">
            <div className="flex justify-center items-center gap-1">
              <svg width="25" height="25" viewBox="0 0 25 25" aria-label="clap">
                <g fill-rule="evenodd">
                  <path d="M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"></path>
                </g>
              </svg>
              <p>7.6K</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <svg
                width="29"
                height="29"
                aria-label="responses"
                class="nm nn mx nc oj"
              >
                <path d="M21.27 20.06a9.04 9.04 0 0 0 2.75-6.68C24.02 8.21 19.67 4 14.1 4S4 8.21 4 13.38c0 5.18 4.53 9.39 10.1 9.39 1 0 2-.14 2.95-.41.28.25.6.49.92.7a7.46 7.46 0 0 0 4.19 1.3c.27 0 .5-.13.6-.35a.63.63 0 0 0-.05-.65 8.08 8.08 0 0 1-1.29-2.58 5.42 5.42 0 0 1-.15-.75zm-3.85 1.32l-.08-.28-.4.12a9.72 9.72 0 0 1-2.84.43c-4.96 0-9-3.71-9-8.27 0-4.55 4.04-8.26 9-8.26 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32a5.59 5.59 0 0 0 .21 1.29c.19.7.49 1.4.89 2.08a6.43 6.43 0 0 1-2.67-1.06c-.34-.22-.88-.48-1.16-.74z"></path>
              </svg>
              <p>16</p>
            </div>
          </div>
          <Socmed unhide />
        </div>
        <hr />
        <Credit
          isPersonal
          image={Avatar}
          title="Bradley Nice"
          desc="Content Manager at https://medium.com/level-up-web 👈. I write
              about web design, web development and technical writing. Follow me
              on Twitter and Facebook"
        />
        <Credit
          image={ShortLevelUp}
          title="Level Up!"
          desc="Stories for technical writers, web developers and web designers. It's time to level up your skills!"
        />
      </div>
      <div style={{ backgroundColor: "#191919" }}>
        <div className="py-16 hidden sm:block">
          <div className="max-w-7xl mx-auto px-12 grid gap-4 grid-cols-3">
            <div className="text-sm text-gray-300">
              <p className="text-white text-lg font-medium">Learn More</p>
              <p className="pt-2">
                Medium is an open platform where 170 million readers come to
                find insightful and dynamic thinking. Here, expert and
                undiscovered voices alike dive into the heart of any topic and
                bring new ideas to the surface. Learn more
              </p>
            </div>
            <div className="text-sm text-gray-300">
              <p className="text-white text-lg font-medium">
                Make Medium yours.
              </p>
              <p className="pt-2">
                Follow the writers, publications, and topics that matter to you,
                and you’ll see them on your homepage and in your inbox. Explore
              </p>
            </div>
            <div className="text-sm text-gray-300">
              <p className="text-white text-lg font-medium">
                Write a story on Medium.
              </p>
              <p className="pt-2">
                If you have a story to tell, knowledge to share, or a
                perspective to offer — welcome home. It’s easy and free to post
                your thinking on any topic. Start a blog
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-12 pt-6 pb-6 sm:pt-0 sm:pb-12 flex flex-col-reverse sm:flex-col">
          <div className="pt-6 pb-6 sm:pt-0 sm:pb-8">
            <hr />
          </div>
          <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-4">
            <svg viewBox="0 0 3940 610" class="w-36 text-white">
              <path
                fill="currentColor"
                d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2M1862.77 37.4l.82-.18v-6.35h-167.48l-155.51 365.5-155.51-365.5h-180.48v6.35l.81.18c30.57 6.9 46.09 17.19 46.09 54.3v434.45c0 37.11-15.58 47.4-46.15 54.3l-.81.18V587H1327v-6.35l-.81-.18c-30.57-6.9-46.09-17.19-46.09-54.3V116.9L1479.87 587h11.33l205.59-483.21V536.9c-2.62 29.31-18 38.36-45.68 44.61l-.82.19v6.3h213.3v-6.3l-.82-.19c-27.71-6.25-43.46-15.3-46.08-44.61l-.14-445.2h.14c0-37.11 15.52-47.4 46.08-54.3m97.43 287.8c3.49-78.06 31.52-134.4 78.56-135.37 14.51.24 26.68 5 36.14 14.16 20.1 19.51 29.55 60.28 28.09 121.21zm-2.11 22h250v-1.05c-.71-59.69-18-106.12-51.34-138-28.82-27.55-71.49-42.71-116.31-42.71h-1c-23.26 0-51.79 5.64-72.09 15.86-23.11 10.7-43.49 26.7-60.45 47.7-27.3 33.83-43.84 79.55-47.86 130.93-.13 1.54-.24 3.08-.35 4.62s-.18 2.92-.25 4.39a332.64 332.64 0 0 0-.36 21.69C1860.79 507 1923.65 600 2035.3 600c98 0 155.07-71.64 169.3-167.8l-7.19-2.53c-25 51.68-69.9 83-121 79.18-69.76-5.22-123.2-75.95-118.35-161.63m532.69 157.68c-8.2 19.45-25.31 30.15-48.24 30.15s-43.89-15.74-58.78-44.34c-16-30.7-24.42-74.1-24.42-125.51 0-107 33.28-176.21 84.79-176.21 21.57 0 38.55 10.7 46.65 29.37zm165.84 76.28c-30.57-7.23-46.09-18-46.09-57V5.28L2424.77 60v6.7l1.14-.09c25.62-2.07 43 1.47 53.09 10.79 7.9 7.3 11.75 18.5 11.75 34.26v71.14c-18.31-11.69-40.09-17.38-66.52-17.38-53.6 0-102.59 22.57-137.92 63.56-36.83 42.72-56.3 101.1-56.3 168.81C2230 518.72 2289.53 600 2378.13 600c51.83 0 93.53-28.4 112.62-76.3V588h166.65v-6.66zm159.29-505.33c0-37.76-28.47-66.24-66.24-66.24-37.59 0-67 29.1-67 66.24s29.44 66.24 67 66.24c37.77 0 66.24-28.48 66.24-66.24m43.84 505.33c-30.57-7.23-46.09-18-46.09-57h-.13V166.65l-166.66 47.85v6.5l1 .09c36.06 3.21 45.93 15.63 45.93 57.77V588h166.8v-6.66zm427.05 0c-30.57-7.23-46.09-18-46.09-57V166.65L3082 212.92v6.52l.94.1c29.48 3.1 38 16.23 38 58.56v226c-9.83 19.45-28.27 31-50.61 31.78-36.23 0-56.18-24.47-56.18-68.9V166.66l-166.66 47.85V221l1 .09c36.06 3.2 45.94 15.62 45.94 57.77v191.27a214.48 214.48 0 0 0 3.47 39.82l3 13.05c14.11 50.56 51.08 77 109 77 49.06 0 92.06-30.37 111-77.89v66h166.66v-6.66zM3934.2 588v-6.67l-.81-.19c-33.17-7.65-46.09-22.07-46.09-51.43v-243.2c0-75.83-42.59-121.09-113.93-121.09-52 0-95.85 30.05-112.73 76.86-13.41-49.6-52-76.86-109.06-76.86-50.12 0-89.4 26.45-106.25 71.13v-69.87l-166.66 45.89v6.54l1 .09c35.63 3.16 45.93 15.94 45.93 57V588h155.5v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66V255.72c7-16.35 21.11-35.72 49-35.72 34.64 0 52.2 24 52.2 71.28V588h155.54v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66v-248a160.45 160.45 0 0 0-2.2-27.68c7.42-17.77 22.34-38.8 51.37-38.8 35.13 0 52.2 23.31 52.2 71.28V588z"
              ></path>
            </svg>
            <div className="flex justify-center items-center gap-3 text-white">
              <p>About</p>
              <p>Write</p>
              <p>Help</p>
              <p>Legal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
