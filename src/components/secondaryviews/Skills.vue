<template>
    <div class="skills is-hidden" ref="skills">
        <div class="skills--content">
            <div v-for="skillset in skillsData">
                <h2 class="skills--subheader">{{skillset.skillCategory}}</h2>
                <ul class="skills--list">
                    <li v-for="skill in skillset.skills" class="skills--list-item">{{skill}}</li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script lang="ts">
export default {
	data() {
		return {
            skillsData: null,
		};
	},
	async mounted() {
        this.skillsData = await fetch("/skillsList.json").then(response => response.json()).then(data => data.skills);
	},

};
</script>
