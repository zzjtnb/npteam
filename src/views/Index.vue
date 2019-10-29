<!--  -->
<template>
	<section class="fl mainbady">
		<Server />
		<Play />
		<Activity />
		<TrackFile />
		<BannedList />
		<Record />
		<FlightInformation />
		<Game />
		<AboutUs />
	</section>
</template>

<script>
import Server from './description/Server';
import Play from './description/Play';
import Activity from './description/Activity';
import TrackFile from './description/TrackFile';
import BannedList from './description/BannedList';
import Record from './description/Record';
import FlightInformation from './description/FlightInformation';
import Game from './Game';
import AboutUs from './description/AboutUs';
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
  components: {
    Server,
    Play,
    Activity,
    TrackFile,
    BannedList,
    Record,
    FlightInformation,
    Game,
    AboutUs
  },
}
</script>

<style scoped>
</style>