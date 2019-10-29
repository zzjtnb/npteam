<!--  -->
<template>
	<div>
		<div class="fl plate" id="xfsp">
			<div class="decorate_left_foot">
				<img src="../../../public/img/components/img07.png" />
			</div>
			<div class="decorate_right_top">
				<img src="../../../public/img/components/img07.png" />
			</div>
			<div>
				<div class="fl column">
					<table class="tab" border="0" cellspacing="0" cellpadding="0">
						<tbody>
							<tr>
								<td>用户名</td>
								<td>UCID</td>
								<td>IP</td>
							</tr>
							<tr v-for="item in list">
								<td>{{item.name}}</td>
								<td>{{item.ucid}}<</td>
								<td>{{item.ip}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="footline">
			<img class="fr" src="../../../public/img/components/img06.png" />
		</div>
		<div class="fl space">
			<img class="fl" src="../../../public/img/components/img04.png" />
			<p class="fl">&nbsp;</p>
			<img class="fl right" src="../../../public/img/components/img04.png" />
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          "ucid": "1e5f39d16a0d22a1369ff4d4703ff1a1",
          "ip": "120.229.42.103:13327",
          "name": "g.k.n",
          "bannedBy": "permaban"
        },
        {
          "ucid": "d37917b5c4366fbfc36c536520c06799",
          "name": "lkyfly1595",
          "time": 1570553117,
          "ip": "125.122.158.245:58769",
          "bannedBy": "autoban"
        },
        {
          "ucid": "e82822110e16cd4ebeab3d7b8d356a52",
          "name": "八丶雲",
          "time": 1556549255,
          "ip": "220.184.173.137:54253",
          "bannedBy": "autoban"
        },
        {
          "ucid": "e62e7e5b3f01f0fe9780af1416c907a1",
          "ip": "122.100.155.46",
          "name": "huik",
          "bannedBy": "permaban"
        },

        {
          "bannedBy": "permaban",
          "name": "g.k.n"
        },
        {
          "bannedBy": "permaban",
          "name": "Shadow"
        },
        {
          "ip": "220.184.173.137:54253",
          "name": "八丶雲",
          "bannedBy": "autoban",
          "ucid": "e82822110e16cd4ebeab3d7b8d356a52",
          "time": 1556549255
        },
        {
          "bannedBy": "permaban",
          "name": "8888888888888888888888888"
        },
        {
          "ip": "125.122.158.245:58769",
          "name": "lkyfly1595",
          "bannedBy": "autoban",
          "ucid": "d37917b5c4366fbfc36c536520c06799",
          "time": 1570553117
        },
        {
          "bannedBy": "permaban",
          "name": "星野日向"
        },
        {
          "bannedBy": "permaban",
          "name": "HeeeSsss"
        },
        {
          "bannedBy": "permaban",
          "name": "天谴"
        },
        {
          "bannedBy": "permaban",
          "name": "sunyk"
        },
        {
          "ip": "61.178.245.25:20871",
          "name": "纵横谍海豹",
          "bannedBy": "autoban",
          "ucid": "bfb6a797d141c39b2ffedb63fee31b8e",
          "time": 1569846619
        },
        {
          "bannedBy": "permaban",
          "name": "308617"
        },
        {
          "bannedBy": "permaban",
          "name": "huik"
        },
        {
          "bannedBy": "permaban",
          "name": "IGAME"
        },
        {
          "bannedBy": "permaban",
          "name": "good job"
        }

      ]
    };
  },
  mounted () { },
  methods: {},
  components: {}
};
</script>

<style scoped></style>
