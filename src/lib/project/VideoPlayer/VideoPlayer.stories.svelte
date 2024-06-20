<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import VideoPlayer from "./VideoPlayer.svelte";

  export const meta = {
    title: "Components/Project/VideoPlayer",
    component: VideoPlayer,
  };
</script>

<Template let:args>
  <VideoPlayer
    {...args}
    poster={"https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1680212024/Video_Posters_header/Video_Posters_header-png?_i=AA"}
    source={[
      "https://videos.pexels.com/video-files/3997798/3997798-uhd_1440_2732_25fps.mp4",
    ]}
  ></VideoPlayer>
</Template>

<Story name="Video" args={{}} />
