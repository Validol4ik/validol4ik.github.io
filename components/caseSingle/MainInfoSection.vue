<template>
  <section class="case-single">
    <div class="container">
			<ul class="stats">
          <li class="stat">
            <p class="stat__title">Type of project</p>
            <h3 class="stat__value">{{ project.type }}</h3>
          </li>
          <li class="stat">
            <p class="stat__title">Deadline</p>
            <h3 class="stat__value">{{ project.time }}</h3>
          </li>
          <li class="stat">
            <p class="stat__title">Budget</p>
            <h3 class="stat__value">{{ project.price }}</h3>
          </li>
          <li v-if="project.siteUrl" class="stat">
            <vs-button
              class="stat__btn"
              :href="project.siteUrl"
              size="large"
              blank
              danger
              >Visit the site</vs-button
            >
          </li>
        </ul>
      <div class="case-info-wrapper">
        <img
          :src="require(`@/assets/img/cases/${project.image}`)"
          class="case-single__preview"
          alt="Case image"
        />
        <div class="case-target">
          <h4 class="pretitle">About the case</h4>
          <h2 class="case-single__title">{{ project.name }}</h2>
          <p class="case-single__desc">{{ project.description }}</p>
          <div class="avatars">
            <h6 class="case-single__members">Contributors</h6>
            <vs-avatar-group max="6">
              <vs-avatar v-for="member in project.contributors" :key="member.id" size="65">
                <img :src="require(`@/assets/img/contributors/${member.avatar}`)" alt="Member" />
              </vs-avatar>
            </vs-avatar-group>
          </div>
          <div class="tasks">
            <div class="task">
              <i class="task__icon bx bxs-notepad"></i>
              <h6 class="task__title">Problem</h6>
              <p class="task__text">{{ project.purpose }}</p>
            </div>
            <div class="task">
              <i class="task__icon bx bxs-message-square-check"></i>
              <h6 class="task__title">Solution</h6>
              <p class="task__text">{{ project.solution }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainInfoSection',
  inject: ['project']
}
</script>

<style lang="scss" scoped>
.case-single {
  &__preview {
    width: 38%;
    height: 590px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  &__title {
    font-size: 36px;
    font-family: 'Montserrat', sans-serif;
  }
  &__desc {
    line-height: 24px;
    font-size: 18px;
    margin: 30px 0 20px;
  }
  &__members {
    font-size: 24px;
    margin-bottom: 5px;
    letter-spacing: 0.5px;
  }

	@media (max-width: 1199px) {
		&__preview {
			width: 40%;
			height: 570px;
		}
		.pretitle {
			margin-bottom: 36px;
		}
	}

	@media (max-width: 991px) {
		&__preview {
			display: none;
		}
	}

	@media (max-width: 767px) {
		text-align: center;
	}

	@media (max-width: 575px) {
		.pretitle, &__title {
			display: none;
		}
	}
}

.stats {
	display: none;
	@media (max-width: 575px) {
		margin-bottom: 40px;
		display: grid;
		grid-template: 1fr / 1fr 1fr;
		gap: 30px 8%;
		.stat {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 20px;
			box-shadow: 0 8px 20px rgba($color: #000, $alpha: 0.07);
			border-radius: 12px;
			&__title {
				margin-bottom: 4px;
				font-size: 14px;
			}
			&__value {
				font-family: 'Montserrat', sans-serif;
				letter-spacing: 0.2px;
				font-size: 18px;
			}
		}
	}
	@media (max-width: 460px) {
		gap: 20px 5%;
		.stat {
			padding: 16px 0;
			&__value {
				font-size: 16px;
			}
		}
	}
	@media (max-width: 375px) {
		grid-template: 1fr / 1fr;
		margin: 0 16px 40px;
		.stat {
			padding: 20px 0;
			&__value {
				font-size: 20px;
			}
		}
	}
}

.case-info-wrapper {
  display: flex;
  justify-content: space-between;

  .case-target {
    width: 56%;
  }

  .vs-avatar__group {
    justify-content: flex-start;
  }

	@media (max-width: 991px) {
		.case-target {
			width: 100%;
		}
	}

	@media (max-width: 767px) {
		.vs-avatar__group {
			justify-content: center;
		}
	}
}

.tasks {
  display: flex;
  justify-content: space-between;
  .task {
    margin-top: 30px;
    width: 46%;
    &__icon {
      color: #e34a57;
      font-size: 46px;
    }
    &__title {
      font-size: 24px;
      margin: 10px 0 5px;
    }
  }

	@media (max-width: 1199px) {
		.task {
			width: 48%;
		}
	}

	@media (max-width: 575px) {
		flex-wrap: wrap;
		.task {
			width: 100%;
			padding: 0 10%;
		}
	}

	@media (max-width: 390px) {
		.task {
			padding: 0;
		}
	}
}
</style>
