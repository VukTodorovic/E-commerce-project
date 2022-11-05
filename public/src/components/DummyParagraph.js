

function DummyParagraph() {
    return (
        <div className="DummyParagraph">
            <p>
            React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS".[32][33] He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.[34] It was open-sourced at JSConf US in May 2013.[33]

React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.

On April 18, 2017, Facebook announced React Fiber, a new set of internal algorithms for rendering, as opposed to React's old rendering algorithm, Stack.[35] React Fiber was to become the foundation of any future improvements and feature development of the React library.[36][needs update] The actual syntax for programming with React does not change; only the way that the syntax is executed has changed.[37] React's old rendering system, Stack, was developed at a time when the focus of the system on dynamic change was not understood. Stack was slow to draw complex animation, for example, trying to accomplish all of it in one chunk. Fiber breaks down animation into segments that can be spread out over multiple frames. Likewise, the structure of a page can be broken into segments that may be maintained and updated separately. JavaScript functions and virtual DOM objects are called "fibers", and each can be operated and updated separately, allowing for smoother on-screen rendering.[38]

On September 26, 2017, React 16.0 was released to the public.[39]

On February 16, 2019, React 16.8 was released to the public.[40] The release introduced React Hooks.[41]

On August 10, 2020, the React team announced the first release candidate for React v17.0, notable as the first major release without major changes to the React developer-facing API.[42]

On March 29, 2022, React 18 was released which introduced a new concurrent renderer, automatic batching and support for server side rendering with Suspense.
            </p>
        </div> 
    );
}

export default DummyParagraph;